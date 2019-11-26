<template>
  <div style="height:100%;width:100%;display: flex;flex-flow: row;">
    <div class="left">
      <span id="add-article" @click="addArticle"><i class="el-icon-circle-plus" style="margin: auto 10px auto 0px;color:#f2f2f2;"></i>新建文章</span>
      <span id="article-list">
        <span v-for="(item,index) in articleList" :key="index" @click="chooseArticle(index)" :class="{'activeArt': activeIdx === index}">{{item?(item.title || '无标题'):'无标题2'}}<i class="el-icon-circle-close" style="margin: auto 7px auto auto;color:#f2f2f2;" v-if="articleList.length>1" @click.capture="removeArticle(index)"></i></span>
      </span>
    </div>
    <div class="info">
      <span><el-button type="primary" round>发表文章</el-button></span>
      <span>
        <span><i class="el-icon-collection-tag"></i><b>标题：</b></span>
        <el-input placeholder="请输入标题" clearable v-model="active.title"></el-input>
      </span>
      <span><span><i class="el-icon-user-solid"></i><b>作者：</b></span>&emsp;{{active.user}}</span>
      <span><span><i class="el-icon-date"></i><b>日期：</b></span>&emsp;{{active.date}}</span>
      <span>
        <span><i class="el-icon-location"></i><b>地点：</b></span>
        <el-input placeholder="选填" clearable v-model="active.place"></el-input>
      </span>
      <span>
        <span><i class="el-icon-sunny"></i><b>天气：</b></span>
        <el-input placeholder="选填" clearable v-model="active.weather"></el-input>
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
  export default {
    name: 'writeBlog',
    components: {
    },
    data() {
			return {
        editor: null,
        inputVisible: false,
        inputValue: '',
        active: {
          title: '',
          user: '',
          date: '',
          place: '',
          weather: '',
          category: [],
          content: ''
        },
        activeIdx: 0,
        articleList: []
			}
		},
		mounted() {
      this.editor = new E(this.$refs.editor)
      this.editor.customConfig = {
        // 上传图片到服务器的地址
        uploadImgServer: 'http://localhost:3000/blog-image',
        // 限制一次最多上传 1 张图片
        uploadImgMaxLength: 1,
        // 修改字段名
        uploadFileName: 'file',
        // 图片上传钩子
        uploadImgHooks: {
          success: (xhr, editor, result)=> {
            // 图片上传并返回结果，图片插入成功之后触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
            console.log('xhr: ', xhr)
            console.log('editor: ', editor)
            console.log('result: ', result)
          }
        },
        // 编辑区值改变事件
        onchange: (html) => {
          this.active.content = html
        },
        // 支持粘贴的事件
        pasteTextHandle: (content) => { //支持粘贴
          return content
        }
      }
      // // this.editor.customConfig.uploadImgShowBase64 = true //图片以base64形式保存
      // this.editor.customConfig.uploadImgServer = 'http://localhost:3000/blog-image' // 上传图片到服务器，和上面的不能同时使用
      // // 限制一次最多上传 1 张图片
      // this.editor.customConfig.uploadImgMaxLength = 1
      // // 修改字段名
      // this.editor.customConfig.uploadFileName = 'file'
      // this.editor.customConfig.uploadImgHooks = {
      //   success: (xhr, editor, result)=> {
      //     // 图片上传并返回结果，图片插入成功之后触发
      //     // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
      //     console.log('xhr: ', xhr)
      //     console.log('editor: ', editor)
      //     console.log('result: ', result)
      //   }
      // }
      // this.editor.customConfig.onchange = (html) => {
      //   this.active.content = html
      // }
      // this.editor.customConfig.pasteTextHandle = (content) => { //支持粘贴
      //   return content
      // }
      this.editor.create()
      // editor.txt.html('<p>用 JS 设置的内容</p>')

      // 初始给文章列表加一篇默认的空白文章
      this.articleList.push({
        title: '',
        user: '',
        date: '',
        place: '',
        weather: '',
        category: [],
        content: ''
      })
		},
		methods: {

      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
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
          this.dynamicTags.push(inputValue)
        }
        this.inputVisible = false
        this.inputValue = ''
      },
      addArticle() {
        this.articleList.push({
          title: '',
          user: '',
          date: '',
          place: '',
          weather: '',
          category: [],
          content: ''
        })
        this.activeIdx = this.articleList.length-1
        this.active = this.articleList[this.articleList.length-1]
      },
      chooseArticle(index) {
        this.activeIdx = index
        this.active = this.articleList[index]
      },
      removeArticle(index) {
        let list = this.articleList
        this.activeIdx = 0
        this.active = this.articleList[0]
        list.splice(index, 1)
        this.articleList = list
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
  font-weight: bold; cursor: pointer;
}
#article-list{
  width: 100%; height: auto; display: flex; flex-flow: column; align-content: center;
}
#article-list>span{
  /* height: auto; display: flex; text-align: left; border-left: solid 3px darkorange; font-size: 16px;
  line-height: 2em; padding: 7px; margin: 10px 0px; background-color: #666666; cursor: pointer;
  justify-content: space-between; */
  height: auto; display: flex; text-align: left; font-size: 16px; justify-content: space-between; border-left: solid 3px rgba(102, 102, 102, 0);
  line-height: 2em; padding: 7px; margin: 0px; background-color: rgba(102, 102, 102, 0); cursor: pointer; border-bottom: solid 1px rgba(102, 102, 102, 0.5);
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