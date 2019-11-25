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
      }
    }
  }
</script>

<style scoped>

</style>