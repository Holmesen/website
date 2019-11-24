<template>
  <div id="app">
    <myheader></myheader>
    <div style="height:90px;width:100%;"></div>
    <div style="height: calc(100vh - 90px);">
      <router-view class="routerView" />
    </div>

    <div class="side-div">
      <div class="icon-div">
        <span title="撰写博客"><i class="sideicon iconfont iconwritefill"></i></span>
        <span title="上传照片"><i class="sideicon iconfont iconpicfill"></i></span>
        <span title="生活记事"><i class="sideicon iconfont iconcamerafill"></i></span>
      </div>
    </div>
    <!-- <div class="mask"></div> -->
    <!-- <myfooter></myfooter> -->
  </div>
</template>

<script>
import jq from 'jquery'
import myheader from './components/header/index'
import myfooter from './components/footer/index'
export default {
  name: 'App',
  components: {
    myheader,
    myfooter
  },
  mounted() {
    // var top=jq(document).scrollTop();
    //   jq(document).on('scroll.unable',function (e){
    //   jq(document).scrollTop(top);
    // })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  padding: 0;
  height: 100vh;
  position: relative;
}
*{
  font-family: cursive;
}
/* .mask{
  position: absolute; top: 0; left: 0; z-index: 999999; background-color: rgba(50, 50, 50, 0.5); width: 100%; height: 100%;
} */
.side-div{
  display: flex; flex-flow: column; position: fixed; top: 30vh; right: 100px;
}
.icon-div{
  display: flex; flex-flow: column; align-content: center; padding: 10px;
}
.icon-div>span{
  display: flex; flex-flow: column; align-content: center; width: 50px; height: 50px; border-radius: 100px; 
  margin: 17px auto; border: solid 2px #2C3E50; cursor: pointer;/* background-color: snow; */
}
.icon-div>span>i:hover{
  background: #2C3E50; color: aliceblue;
}
.icon-div>span>i{
  font-size: 30px; line-height: 50px; margin: auto; width: 100%; height: 100%; 
  background-color: rgba(255, 255, 255, 0.7); color: #2C3E50; border-radius: 100px;
}
</style>
