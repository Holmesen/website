<template>
  <div style="height:100%;width:100%;display: flex;flex-flow: row;">
    <div class="left">
      <span id="add-article"><i class="el-icon-circle-plus" style="margin: auto 10px auto 0px;color:#f2f2f2;"></i>新建文章</span>
      <span id="article-list">
        <span>文章一<i class="el-icon-circle-close" style="margin: auto 7px auto auto;color:#f2f2f2;"></i></span>
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
        inputVisible: false,
        inputValue: '',
        active: {
          title: 'xx标题',
          user: 'Holmesen',
          date: '2019/09/16 23:13:00',
          place: '福建省厦门市',
          weather: '天气很好',
          category: ['标签一', '标签二'],
          content: ''
        }
			}
		},
		mounted() {
      var editor = new E(this.$refs.editor)
      editor.customConfig.uploadImgShowBase64 = true //图片以base64形式保存
      editor.customConfig.onchange = (html) => {
        this.active.content = html
      }
      editor.customConfig.pasteTextHandle = (content) => { //支持粘贴
        return content
      }
      editor.create()
      editor.txt.html('<p>用 JS 设置的内容</p>')
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
  height: auto; display: flex; text-align: left; border-left: solid 3px darkorange; font-size: 16px;
  line-height: 2em; padding: 7px; margin: 10px 0px; background-color: #666666; cursor: pointer;
  justify-content: space-between;
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
</style>