<template>
  <div id='id' style="height:100%;width:100%;display: flex;flex-flow: row;">
    <div class="left">
      <span id="add-article" @click="addAlbum"><i class="el-icon-circle-plus" style="margin: auto 10px auto 0px;color:#f2f2f2;"></i>新建相册</span>
      <span id="article-list">
        <span v-for="(item,index) in albumList" :key="index" @click="chooseAlbum(index)" :class="{'activeArt': activeIdx === index}"><span :title="item.name||'无标题'">{{item?(item.name || '无标题'):'无标题'}}</span><i class="el-icon-circle-close" style="margin: auto 7px auto auto;color:#f2f2f2;" v-if="albumList.length>1" @click.stop="removeAlbum(index)"></i></span>
      </span>
    </div>
    <div class="right">
      <div class="album-info">
        <el-row>
          <el-col :span="8">相册名：<el-input></el-input></el-col>
          <el-col :span="8">创建者：<el-input></el-input></el-col>
          <el-col :span="8">创建时间：<el-input></el-input></el-col>
        </el-row>
        <el-row>
          <el-col :span="8">主题：<el-input></el-input></el-col>
          <el-col :span="8">标签：<el-input></el-input></el-col>
          <el-col :span="8">权限：<el-input></el-input></el-col>
        </el-row>
        <el-row>
          <el-col :span="24">相册描述：<el-input></el-input></el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-button>修改信息</el-button>
            <el-button>确认修改</el-button>
            <el-button>上传相册</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="picture">
        <el-upload action="http://localhost:3000/upload/album-image?ukeyid=TWzcYDjybTSmcM65&test=123abc" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
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
      dialogImageUrl: '',
      dialogVisible: false,
      albumList: [
        {
          name: ''
        }
      ],
      activeIdx: 0
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    addAlbum() {},
    chooseAlbum(index) {},
    removeAlbum(index) {}
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
  display: flex; flex-flow: column; min-height: 200px;
}
.album-info /deep/ .el-row{
  display: flex; flex-flow: row; margin: 5px 0px;
}
.album-info /deep/ .el-row>.el-col{
  display: flex; word-break: keep-all; line-height: 40px;
}
.picture{
  width: calc(100% - 40px); height: 70%; padding: 20px;
}
</style>