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
    <el-button @click="verifyJWT">Verify JWT</el-button>
    <el-button @click="getUserInfo">获取用户信息</el-button>
  </div>
</template>

<script>
import {verifyJWT} from '../apis/test'
  export default {
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
      }
    }
  }
</script>

<style scoped>

</style>