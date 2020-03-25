<template>
  <div id="head" :class="{'head-abso':(headState==='abso'), 'head-fixed':(headState==='fixed')}">
    <div class="head-div">
      <span class="head-logo"><a href="/" style="height:80%;margin:auto;"><img src="../../assets/logo-Holmesen.png" alt=""></a></span>
      <span class="head-menus">
        <span v-for="(item,idx) in menus" :key="idx" :class="{'actived-menu':activedMenu===idx}" @click="clickMenu(idx)">{{item.name}}</span>
      </span>
      <span class="head-state">
        <span v-if="!hasLogin" class="state-offline">
          <a href="/sign">登录</a>
          <a href="/sign">注册</a>
        </span>
        <span v-if="hasLogin" class="state-online">
          <img :src="avatar" alt="">
          <span>
            <el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link">
                {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="personal" icon="el-icon-user">个人中心</el-dropdown-item>
                <el-dropdown-item command="logOut" icon="el-icon-switch-button">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import { isLogin } from "../../utils/auth.js";
  export default {
    data() {
      return {
        headState: 'abso',
        activedMenu: 0,
        hasLogin: false,
        username: this.$store.getters.name,
        avatar: this.$store.getters.avatar || '../../assets/images/avatar.jpg'
      }
    },
    props: {
      menus: {
        type: Array,
        required: true,
        default() {
          return []
        }
      }
    },
    methods: {
      listenerScroll() {
        var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(top<=0) {
          if(this.headState !== 'abso')
            this.headState = 'abso'
        } else {
          if(this.headState !== 'fixed')
            this.headState = 'fixed'
        }
      },
      clickMenu(idx) {
        this.activedMenu = idx
        this.$router.push({path: this.$props.menus[idx]['route']})
      },
      handleCommand(command) {
        switch(command) {
          case 'personal': this.$router.push({path: '/personal'}); break
          case 'logOut': this.$store.dispatch('FedLogOut').then(()=>{this.hasLogin=isLogin()}); break
        }
      }
    },
    mounted() {
      this.hasLogin = isLogin()
      window.addEventListener('scroll', this.listenerScroll)
    },
    destroyed() {
      window.removeEventListener('scroll', this.listenerScroll)
    },
    watch: {
      //
    }
  }
</script>

<style scoped>
.head-state,.state-online{
  height: 100%; display: flex; flex-flow: row; margin: auto 0;
}
.state-offline{
  height: 100%; display: flex; flex-flow: row; 
}
.state-offline>a{
  font-size: 14px; line-height: 1; margin: auto 7px; outline: none; color: whitesmoke;
}
.state-online>img{
  height: 50px; width: 50px; border-radius: 50px; margin: auto 5px;
}
.state-online>span{
  margin: auto 10px;
}
.el-dropdown-link {
  cursor: pointer; color: white;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block; color: #8492a6; font-size: 14px; margin-bottom: 20px;
}
#head{
  width: calc(100% - 60px); height: 80px; padding: 0px 30px; display: flex; flex-flow: row;
}
.head-abso{
  position: absolute; background-color: rgba(255, 255, 255, 0); color: rgba(245, 245, 245, 0.8); z-index: 100; transition: all 0.5s;
}
.head-fixed{
  position: fixed; background-color: rgba(10, 10, 10, 1); color: rgba(245, 245, 245, 0.8); z-index: 100; transition: all 0.5s;
}
.head-div{
  width: 100%; display: flex; flex-flow: row; justify-content: space-between; height: 100%;
}
.head-logo{
  width: 150px; height: 100%; margin: auto auto auto 0; display: flex; flex-flow: column;
}
.head-logo img{
  width: 100%; height: 100%; margin: auto;
}
.head-menus{
  width: auto; height: 100%; display: flex; flex-flow: row; align-content: center; margin: auto 50px auto auto;
}
.head-menus>span{
  width: auto; height: calc(100% - 22px); padding: 10px 20px; font-size: 14px; line-height: 60px; cursor: pointer;
}
.actived-menu{
  color: #f87f3a; border-bottom: solid 2px #f87f3a;
}
.head-menus>span:hover,.state-offline>a:hover{
  color: #f87f3a; transition: all 0.5s;
}
</style>