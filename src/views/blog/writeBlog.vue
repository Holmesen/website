<template>
  <div style="height:100%;width:100%;display: flex;flex-flow: row;">
    <div class="left">
      <span id="add-article" @click="addArticle"><i class="el-icon-circle-plus" style="margin: auto 10px auto 0px;color:#f2f2f2;"></i>新建文章</span>
      <span id="article-list">
        <span v-for="(item,index) in articleList" :key="index" @click="chooseArticle(index)" :class="{'activeArt': activeIdx === index}"><span :title="item.title||'无标题'">{{item?(item.title || '无标题'):'无标题'}}</span><i class="el-icon-circle-close" style="margin: auto 7px auto auto;color:#f2f2f2;" v-if="articleList.length>1" @click.stop="removeArticle(index)"></i></span>
      </span>
    </div>
    <div class="info">
      <span><el-button type="primary" round @click="releaseBlog">{{active.isNew?"发表文章":"更新文章"}}</el-button></span>
      <span>
        <span><i class="el-icon-collection-tag"></i><b>标题：</b></span>
        <el-input placeholder="请输入标题" v-model="active.title" maxlength="50" show-word-limit></el-input>
      </span>
      <span><span><i class="el-icon-user-solid"></i><b>作者：</b></span>&emsp;{{active.user}}</span>
      <span><span><i class="el-icon-date"></i><b>日期：</b></span>&emsp;{{active.date}}</span>
      <span>
        <span><i class="el-icon-location"></i><b>地点：</b></span>
        <el-input placeholder="选填" clearable v-model="active.place" maxlength="30" show-word-limit></el-input>
      </span>
      <span>
        <span><i class="el-icon-sunny"></i><b>天气：</b></span>
        <el-input placeholder="选填" clearable v-model="active.weather" maxlength="10" show-word-limit></el-input>
      </span>
      <span>
        <span><i class="el-icon-price-tag"></i><b>标签：</b></span>
        <span class="tags-span" style="flex-wrap: wrap;">
          <el-tag :key="tag" v-for="tag in active.category" closable :disable-transitions="false" @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
        </span>
      </span>
    </div>
    <div class="write">
      <div class="editor-div" style="">
        <div ref="editor" class="editor" id='editor' style="text-align:left"></div>
      </div>
    </div>
  </div>
</template>

<script>
import E from 'wangeditor'
import {NowTime, UTC2Local} from '../../utils/time'
import {releaseBlog, getBlogList, updateBlog, deleteBlog} from '../../apis/blog'
import {isLogin} from '../../utils/auth.js'
import emoji from '../../assets/js/emoji'
import emoji2 from '../../assets/js/emoji2'
  export default {
    name: 'writeBlog',
    components: {
    },
    data() {
			return {
        editor: null,
        inputVisible: false,
        inputValue: '',
        dateTime: '',
        active: {},
        activeIdx: 0,
        articleList: [],
        loading: null,
        isloading: false
			}
		},
		mounted() {
      this.isLogin = isLogin()
      if(!this.isLogin) {
        this.$message.error("登录后才能编辑博客哦~")
        this.$router.push({path: '/sign'})
        return
      }
      if(!this.$route.params.id) { this.$router.push({path: '/blank'}); return }
      if(this.$route.params.id !== this.$store.getters.keyid) {
        this.$message.error("您所查看的用户博客列表与您的登录账号不符！")
        this.$router.push({path: '/blank'})
        return
      }
      this.openFullScreen()

      // setInterval(() => {
      //   this.active.date = this.dateTime = NowTime()
      // }, 500)
      this.editor = new E(this.$refs.editor)
      this.editor.customConfig = {
        // 上传图片到服务器的地址
        uploadImgServer: process.env.BASE_API + '/upload/blog-image?keyid=' + this.$store.getters.keyid,
        // 限制一次最多上传 1 张图片
        uploadImgMaxLength: 1,
        // 修改字段名
        uploadFileName: 'file',
        // 图片上传钩子
        uploadImgHooks: {
          // 图片上传之前触发
          before: function (xhr, editor, files) {
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
            document.body.style.cursor = 'wait'
          },
          success: (xhr, editor, result)=> {
            // 图片上传并返回结果，图片插入成功之后触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
            document.body.style.cursor = 'auto'
          },
          // 图片上传并返回结果，但图片插入错误时触发
          fail: function (xhr, editor, result) {
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
            document.body.style.cursor = 'auto'
          },
          // 图片上传出错时触发
          error: function (xhr, editor) {
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
            document.body.style.cursor = 'auto'
          },
          // 图片上传超时时触发
          timeout: function (xhr, editor) {
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
            document.body.style.cursor = 'auto'
          },
          // 图片上传并返回结果，自定义插入图片的事件
          customInsert: function (insertImg, result, editor) {
            // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
            var url = result.data.path
            insertImg(url)
            // result 必须是一个 JSON 格式字符串！！！否则报错
          }
        },
        // 编辑区值改变事件
        onchange: (html) => {
          this.active.content = html
        },
        // 支持粘贴的事件
        pasteTextHandle: (content) => { //支持粘贴
          return content
        },
        emotions: [
          { title: "emoji", type: "image", content: emoji },
          { title: "icon", type: "image", content: emoji2 }
        ]
      }
      this.editor.create()
      this.getBlogList()
		},
		methods: {

      handleClose(tag) {
        this.active.category.splice(this.active.category.indexOf(tag), 1)
      },

      showInput() {
        this.inputVisible = true
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      },

      handleInputConfirm() {
        let inputValue = this.inputValue
        if (inputValue) {
          this.active.category.push(inputValue)
        }
        this.inputVisible = false
        this.inputValue = ''
      },
      getBlogList() {
        if(!this.$route.params.id || !this.isLogin) { this.$router.push({path: '/blank'}) }
        getBlogList({ukeyid: this.$route.params.id}).then(res=> {
          if(res.data.success) {
            res.data.data.forEach((el,idx) => {
              res.data.data[idx]["date"] = UTC2Local(el.date)
              res.data.data[idx]["updateTime"] = UTC2Local(el.updateTime)
            })
            this.articleList = res.data.data
            if(this.articleList.length===0) {
              this.addArticle()
            } else {
              this.active = this.articleList[0]
            }
            this.editor.txt.html(this.active.content)
          } else {
            this.$message.error(res.data.message || "获取博客列表失败")
          }
        }).catch(err=> {
          this.$message.error("获取博客列表失败")
          console.error(err)
        }).finally(()=>{this.loading.close()})
      },
      addArticle() {
        this.articleList.push({
          title: '',
          user: this.$store.getters.name || '',
          ukeyid: this.$store.getters.keyid,
          date: NowTime(),
          place: '',
          weather: '',
          category: [],
          content: '',
          isNew: true
        })
        this.activeIdx = this.articleList.length-1
        this.active = this.articleList[this.articleList.length-1]
      },
      chooseArticle(index) {
        this.activeIdx = index
        this.active = this.articleList[index]
      },
      removeArticle(idx) {
        if(this.articleList[idx]["isNew"]) {
          this.$confirm('该博客还未上传, 是否删除?', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.activeIdx = 0
            this.active = this.articleList[0]
            this.articleList.splice(idx, 1)
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          }).finally(()=>{this.isloading = false})
        } else {
          this.$confirm('将永久删除该博客, 是否继续?', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.isloading = true
            deleteBlog(this.articleList[idx]["keyid"]).then(res=> {
              if(res.data.success) {
                this.activeIdx = 0
                this.active = this.articleList[0]
                this.articleList.splice(idx, 1)
                this.$notify({
                  title: '删除博客',
                  message: res.data.message || '博客删除成功',
                  type: 'success'
                })
                this.getBlogList()
              } else {
                this.$notify({
                  title: '删除博客',
                  message: res.data.message || '博客删除失败',
                  type: 'error'
                })
              }
            }).catch(err=> {
              this.$notify({
                title: '删除博客',
                message: '博客删除失败',
                type: 'error'
              })
              console.error(err)
            }).finally(()=> { this.isloading = false })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          }).finally(()=>{this.isloading = false})
        }
      },
      /**
       * 发布博客
       */
      releaseBlog() {
        if(!this.active.title) {
          this.$message.error("请填写标题")
          return
        }
        if(!this.active.content) {
          this.$message.error("请填写内容")
          return
        }
        this.openFullScreen()
        if(!this.active.isNew) {
          updateBlog( this.active, this.$store.getters.token ).then(res=> {
            if(res.data.success) {
              // this.$message.success(res.message || '博客发布成功')
              this.$notify({
                title: '更新博客',
                message: res.data.message || '博客更新成功',
                type: 'success'
              })
              this.activeIdx = 0
              this.getBlogList()
            } else {
              // this.$message(res.message || '博客发布失败')
              this.$notify({
                title: '更新博客',
                message: res.data.message || '博客更新失败',
                type: 'error'
              })
            }
          }).catch(err=> {
            // this.$message.error('博客发布失败')
            this.$notify({
              title: '更新博客',
              message: '博客更新失败',
              type: 'error'
            })
            console.error(err)
          }).finally(()=> { this.loading.close() })
        } else {
          releaseBlog( this.active, this.$store.getters.token ).then(res=> {
            if(res.data.success) {
              // this.$message.success(res.message || '博客发布成功')
              this.$notify({
                title: '发布博客',
                message: res.data.message || '博客发布成功',
                type: 'success'
              })
              this.active.isNew = false
              this.activeIdx = 0
              this.getBlogList()
            } else {
              // this.$message(res.message || '博客发布失败')
              this.$notify({
                title: '发布博客',
                message: res.data.message || '博客发布失败',
                type: 'error'
              })
            }
          }).catch(err=> {
            // this.$message.error('博客发布失败')
            this.$notify({
              title: '发布博客',
              message: '博客发布失败',
              type: 'error'
            })
            console.error(err)
          }).finally(()=> { this.loading.close() })
        }
        
      },
      openFullScreen() {
        this.loading = this.$loading({
          lock: true,
          text: 'loading...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
      }
    },
    
    watch: {
      'active': {
        handler(newV, oldV) {
          this.articleList[this.activeIdx] = this.active
        },
        deep: true
      },
      'activeIdx': function(newV, oldV) {
        this.active = this.articleList[newV]
        this.editor.txt.html(this.active.content)
      }
    }
  }
</script>

<style scoped>
/* @import "../../../node_modules/vue2-editor/dist/vue2-editor.css"; */
/* Import the Quill styles you want */
/* @import '../../../node_modules/vue2-editor/node_modules/quill/dist/quill.core.css';
@import '../../../node_modules/vue2-editor/node_modules/quill/dist/quill.bubble.css';
@import '../../../node_modules/vue2-editor/node_modules/quill/dist/quill.snow.css'; */
/* *{
	display: flex; flex-flow: column; align-content: center;
} */
.editor-div{
  width:100%; height:100%;
}
.editor{
  width: 100%; height: 100%;
}
#editor /deep/ .w-e-text-container{ 
  height:calc(100% - 31.2px) !important;
}
#editor /deep/ img{
  max-width: 100%;
}
#content img{
  height: 50px;
}
.submit{
  margin:30px auto;
}
.tags-span /deep/ .el-tag{
  margin: 7px 3px;
}
.tags-span /deep/ .button-new-tag, .tags-span /deep/ .input-new-tag{
  margin: auto 10px;
}


.left{
  width: 15%; height: 100%; display: flex; flex-flow: column; align-content: center; border-right: solid 1px chocolate;
  background-color: #404040; color: #f2f2f2;
}
#add-article{
  display: flex; flex-flow: row; align-content: center; font-size: 18px; line-height: 2em; padding: 7px 13px; 
  font-weight: bold; cursor: pointer; border-bottom: solid 1px gray;
}
#article-list{
  width: 100%; height: 100%; max-height: 100%; overflow-y: auto; display: flex; flex-flow: column; align-content: center;
}
#article-list>span{
  height: auto; display: flex; text-align: left; font-size: 16px; justify-content: space-between; border-left: solid 3px rgba(102, 102, 102, 0);
  line-height: 2em; padding: 7px; margin: 0px; background-color: rgba(102, 102, 102, 0); cursor: pointer; border-bottom: solid 1px rgba(102, 102, 102, 0.5);
  
}
#article-list>span>span{
  max-width: calc(100% - 20px); word-break: break-all; display: -webkit-inline-box; text-overflow: -o-ellipsis-lastline; overflow: hidden; text-overflow: ellipsis; 
  -webkit-line-clamp: 2; line-clamp: 2; -webkit-box-orient: vertical;
}
#article-list>span:hover{
  background-color: rgba(102, 102, 102);
}
.info{
  width: 20%; display: flex; flex-flow: column; padding: 10px; border-right: solid 1px #cccccc; overflow: auto;
}
.info>span{
  display: flex; flex-flow: column; padding: 10px 3px; border-bottom: solid 1px #bbbbbb; font-size: 16px; 
  line-height: 2em; text-align: left;
}
.info>span>span{
  display: flex; flex-flow: row; word-break: keep-all;
}
.info>span>span>i{
  margin: auto 5px auto 0px;
}
.write{
  width: 65%; height: 100%;
}

.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px; height: 32px; line-height: 30px; padding-top: 0; padding-bottom: 0;
}
.input-new-tag {
  width: 90px; margin-left: 10px; vertical-align: bottom;
}

.activeArt{
  border-left: solid 3px darkorange !important; background-color: #666666 !important;
}
</style>