<template>
  <div>
    <!-- <el-row>
      
    </el-row>
    <el-row>
      <el-col><el-button>GET</el-button></el-col>
      <el-col><el-button>POST</el-button></el-col>
      <el-col><el-button>PUT</el-button></el-col>
      <el-col><el-button>DELETE</el-button></el-col>
    </el-row> -->
    <!-- <div class="animated bounce" style="width:fit-content;margin:20px auto;"><el-button type="primary" @click="verifyJWT">Verify JWT</el-button></div>
    <div style="width:fit-content;margin:20px auto;"><el-button type="success" @click="getUserInfo">获取用户信息</el-button></div> -->
    <div style="height:100vh;background-color:red;align-content:center;display:flex;flex-flow:row;">
      <span id="span1" class="animated" style="font-size:50px;margin:auto;width:auto;text-align:center;">Hello</span>
    </div>
    <div style="height:100vh;background-color:blue;align-content:center;display:flex;flex-flow:row;">
      <span id="span2" class="animated" style="font-size:50px;margin:auto;width:auto;text-align:center;">World</span>
    </div>
    <div style="height:100vh;background-color:orange;align-content:center;display:flex;flex-flow:row;">
      <span id="span3" class="animated" style="font-size:50px;margin:auto;width:auto;text-align:center;">I</span>
    </div>
    <div style="height:100vh;background-color:green;align-content:center;display:flex;flex-flow:row;">
      <span id="span4" class="animated" style="font-size:50px;margin:auto;width:auto;text-align:center;">Love</span>
    </div>
    <div style="height:100vh;background-color:yellow;align-content:center;display:flex;flex-flow:row;">
      <span id="span5" class="animated" style="font-size:50px;margin:auto;width:auto;text-align:center;">You</span>
    </div>
  </div>
</template>

<script>
import {verifyJWT} from '../apis/test'
  export default {
    data() {
      return {
        visualH: 0,
        elH: 0,
        animateEls: []
      }
    },
    methods: {
      verifyJWT() {
        verifyJWT().then(res=> {
          console.log('done: ', res)
        }).catch(err=> {
          console.error('error: ', err)
        }).finally(()=> {
          console.log('Finsh')
        })
      },
      getUserInfo() {
        this.$store.dispatch('GetUserInfo').then(res=> {
          console.log('获取到的用户信息：', res)
        }).catch(err=> {
          console.error(err)
        })
      },
      initAnimate() {

      }
    },
    mounted() {
      this.animateEls = [
        { el: document.getElementById("span1"), animateName: 'fadeInDown' },
        { el: document.getElementById("span2"), animateName: 'fadeInRight' },
        { el: document.getElementById("span3"), animateName: 'fadeInUp' },
        { el: document.getElementById("span4"), animateName: 'fadeInLeft' },
        { el: document.getElementById("span5"), animateName: 'zoomIn' },
      ]
      this.visualH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      this.animateEls.forEach(el => {
        if(el.el.getBoundingClientRect().top<this.visualH){
          el.el.classList.add(el.animateName)
        }else{
          el.el.classList.remove(el.animateName)
        }
      })
      window.onscroll = ()=> {
        this.visualH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        this.animateEls.forEach((el,idx) => {
          if(el.el.getBoundingClientRect().top < this.visualH && el.el.getBoundingClientRect().top > 0){
            el.el.classList.add(el.animateName)
          }else{
            el.el.classList.remove(el.animateName)
          }
        })
      }
    }
  }
</script>

<style scoped>
.animated{
  animation-duration: 3s;
  animation-delay: 0s;
  /* animation-iteration-count: infinite; */
}
</style>