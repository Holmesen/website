<template>
  <div id='id' style="height:100%;width:100%;display: flex;flex-flow: row; overflow-y:hidden;">
    <div class="left">
      <span id="add-article" @click="addAlbum"><i class="el-icon-circle-plus" style="margin: auto 10px auto 0px;color:#f2f2f2;"></i>新建相册</span>
      <span id="article-list">
        <span v-for="(item,index) in albumList" :key="index" @click="chooseAlbum(index)" :class="{'activeArt': activeIdx === index}"><span :title="item.name||'无标题'">{{item?(item.name || '无标题'):'无标题'}}</span><i class="el-icon-circle-close" style="margin: auto 7px auto auto;color:#f2f2f2;" v-if="albumList.length>1" @click.stop="removeAlbum(index)"></i></span>
      </span>
    </div>
    <div class="right">
      <div class="album-info" :class="{'has-fold':isFold}">
        <el-row v-show="!isFold">
          <el-col :span="8"><span>相&nbsp;册&nbsp;名：</span><el-input v-model="active.name" :disabled="!isEdit"></el-input></el-col>
          <el-col :span="8"><span>创&nbsp;建&nbsp;者：</span><el-input v-model="active.user" :disabled="true"></el-input></el-col>
          <el-col :span="8"><span>创建时间：</span><el-input v-model="active.date" :disabled="true"></el-input></el-col>
        </el-row>
        <el-row v-show="!isFold">
          <!-- <el-col :span="8"><span>主&emsp;&emsp;题：</span><el-input></el-input></el-col> -->
          <el-col :span="8"><span>权&emsp;&emsp;限：</span><el-switch style="height: 40px;" :disabled="!isEdit" v-model="active.isPublic" inactive-text="私密" active-text="公开"></el-switch></el-col>
          <el-col :span="16"><span style="line-height:32px;">标&emsp;&emsp;签：</span>
            <el-tag effect="dark" style="line-height:32px; height:32px;" :key="tag" v-for="tag in active.tags" :closable="isEdit" :disable-transitions="false" @close="handleClose(tag)">{{tag}}</el-tag>
            <el-input class="input-new-tag" style="width:100px;line-height:32px; height:32px;" v-if="inputVisible && isEdit" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
            <el-button v-else class="button-new-tag" style="line-height:32px; height:32px;" size="small" @click="showInput" v-show="isEdit">+ New Tag</el-button>
          </el-col>
        </el-row>
        <el-row v-show="!isFold">
          <el-col :span="24"><span>相册描述：</span><el-input v-model="active.desc" :disabled="!isEdit" type="textarea" :rows="2" maxlength="100" show-word-limit></el-input></el-col>
        </el-row>
        <el-row v-show="!isFold">
          <el-col :span="24">
            <el-button round style="margin-left:auto;" type="warning" @click="edit(false)">{{isEdit?"取消修改":"修改信息"}}</el-button>
            <el-button round type="success" v-show="isEdit" @click="edit(true)">确认修改</el-button>
            <el-button round style="margin-right:20px;" type="primary" v-show="!isEdit" @click="release">上传相册</el-button>
          </el-col>
        </el-row>
        <span v-show="isFold" style="font-size:15px; color:#cccccc; text-align:center;">查看更多相册信息</span>
        <div class="fold" @click="isFold=!isFold"><i v-show="!isFold" class="el-icon-caret-top"></i><i v-show="isFold" class="el-icon-caret-bottom"></i></div>
      </div>
      <div class="picture" :class="{'has-fold2':isFold}">
        <el-upload multiple :limit="5" :action='"http://localhost:3000/upload/album-image?keyid="+ukeyid' list-type="picture-card" :on-success="pictureUploadSuccess" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'name',
  data() {
    return {
      ukeyid: this.$store.getters.keyid,
      dialogImageUrl: '',
      dialogVisible: false,
      albumList: [
        {
          name: '', // 相册名
          user: '', // 创建者
          date: '', // 创建日期
          tags: [], // 标签
          isPublic: false, // 是否公开
          desc: '', // 描述
          list: [] // 相册列表
        }
      ],
      active: {
        name: '', // 相册名
        user: '', // 创建者
        date: '', // 创建日期
        tags: [], // 标签
        isPublic: false, // 是否公开
        desc: '', // 描述
        list: [] // 相册列表
      },
      temp: null,
      activeIdx: 0,
      isFold: false, // 相册信息是否收起
      isEdit: false, // 是否修改相册信息
      inputVisible: false,
      inputValue: '',
      loading: null
    };
  },
  methods: {
    handleRemove(file, fileList) {
      // console.log(file, fileList)
      let list = []
      fileList.forEach(el => {
        list.push(el.response.data)
      })
      this.active.list = JSON.parse(JSON.stringify(list))
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    pictureUploadSuccess(response, file, fileList) {
      if(response.success) {
        this.active.list.push(response.data)
      }
    },
    addAlbum() {
      this.albumList.push({
        name: '',
        user: '',
        date: '',
        tags: [],
        isPublic: false,
        desc: '',
        list: []
      })
      this.activeIdx = this.albumList.length-1
      this.active = this.albumList[this.albumList.length-1]
    },
    chooseAlbum(index) {
      this.activeIdx = index
      this.active = this.albumList[index]
    },
    removeAlbum(index) {
      this.activeIdx = 0
      this.active = this.albumList[0]
      this.albumList.splice(index, 1)
    },
    handleClose(tag) {
      this.active.tags.splice(this.active.tags.indexOf(tag), 1)
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
        this.active.tags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    edit(bol) {
      if(!this.isEdit) {
        this.temp = JSON.parse(JSON.stringify(this.active))
      } else {
        if(!bol) {
          this.active = JSON.parse(JSON.stringify(this.temp))
        }
      }
      this.isEdit = !this.isEdit
    },
    release() {
      // this.openFullScreen()
    },
    openFullScreen() {
      this.loading = this.$loading({
        lock: true,
        text: '记事发布ing...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    }
  },
  mounted () {
    this.active = !!this.albumList ? this.albumList[0] : {name: '', user: '', date: '', tags: [], isPublic: false, desc: '', list: []}
  }
}
</script>

<style scoped>
.left{
  width: 20%; height: 100%; display: flex; flex-flow: column; align-content: center; border-right: solid 1px chocolate;
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
.activeArt{
  border-left: solid 3px darkorange !important; background-color: #666666 !important;
}

.right{
  width: 80%; height: 100%; display: flex; flex-flow: column;
}
.album-info{
  width: calc(100% - 40px); height: 30%; border-bottom: solid 1px #bbbbbb; padding: 20px;
  display: flex; flex-flow: column; min-height: 200px; position: relative;
}
.album-info /deep/ .el-row{
  display: flex; flex-flow: row; margin: 5px 0px;
}
.album-info /deep/ .el-row>.el-col{
  display: flex; flex-flow: row; word-break: keep-all; line-height: 40px;
}
.album-info /deep/ .el-row>.el-col>.el-input{
  width: calc(100% - 100px);
}
.album-info>.el-row>.el-col>span{
  word-break: keep-all; line-height: 40px;
}
.picture{
  width: calc(100% - 40px); height: 70%; padding: 20px; max-height: 70%; overflow-y: auto;
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

.fold{
  width: 100px; height: 20px; position: absolute; left: calc(50% - 50px); bottom: 0px; z-index: 99; background-color: #dfdfdf; 
  border-top-left-radius: 7px; border-top-right-radius: 7px; font-size: 20px; cursor: pointer;
}
.has-fold{
  height: 20px; min-height: 20px;
}
.has-fold2{
  height: calc(100% - 20px); max-height: calc(100% - 20px);
}
</style>