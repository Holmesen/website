<template>
  <div id='id' class="page-component__scroll el-scrollbar">
    <!-- <div class="el-scrollbar__bar is-horizontal"><div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div></div>
    <div class="el-scrollbar__bar is-vertical"><div class="el-scrollbar__thumb" style="height: 5.94714%; transform: translateY(166.667%);"></div></div> -->
    <el-upload action="http://localhost:3000/upload/album-image?ukeyid=TWzcYDjybTSmcM65&test=123abc" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'name',
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
}
</script>

<style scoped>
/* .page-component__scroll {
  height: calc(100% - 80px); margin-top: 80px;
}
.el-scrollbar {
  overflow: hidden; position: relative;
}
.el-scrollbar__bar.is-horizontal {
  height: 6px; left: 2px;
}
.el-scrollbar__bar {
  position: absolute; right: 2px; bottom: 2px; z-index: 1; border-radius: 4px; opacity: 0; transition: opacity .12s ease-out;
}
.el-scrollbar__bar.is-horizontal>div {
  height: 100%;
}
.el-scrollbar__thumb {
  position: relative; display: block; width: 0; height: 0; cursor: pointer; border-radius: inherit; background-color: rgba(144,147,153,.3); transition: background-color .3s;
}
.el-scrollbar__bar.is-vertical {
  width: 6px; top: 2px;
}
.el-scrollbar__bar {
  position: absolute; right: 2px; bottom: 2px; z-index: 1; border-radius: 4px; opacity: 0; transition: opacity .12s ease-out;
}
.el-scrollbar__bar.is-vertical>div {
  width: 100%;
}
.el-scrollbar__thumb {
  position: relative; display: block; width: 0; height: 0; cursor: pointer; border-radius: inherit; background-color: rgba(144,147,153,.3); transition: background-color .3s;
} */
</style>