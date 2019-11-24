<template>
  <div style="display:flex; flex-flow:column; algin-content:center; height:100%; margin:0; padding:0;">
    <!-- 背景视频 -->
    <video autoplay loop muted><source src="../../assets/video/video.mp4" type="video/mp4"></video>

    <!-- 登陆 -->
    <div v-if="issignin" class="signin-div" v-loading="isloading">
      <el-tooltip effect="dark" content="微信扫码登录" placement="right">
        <span style="position:absolute; top:0px; right:0px; width:40px; height:40px; margin:0;">
          <i class="iconfont iconsaomadenglu" style="font-size:36px; cursor:pointer;"></i>
        </span>
      </el-tooltip>
      <span style="font-size:20px; line-height:1.5em; text-align:center; font-weight:bold;">登录</span>
      <span><el-input placeholder="请输入用户名" v-model="name" clearable></el-input></span>
      <span><el-input placeholder="请输入密码" v-model="pwd" show-password></el-input></span>
      <span><el-button type="primary" style="width:100%;" @click="signin">登录</el-button></span>
      <span class="signup">没有账号？<u style="font-weight:bold; color:#409EFF; cursor:pointer;" @click="issignin = false">注册一个</u></span>
    </div>

    <!-- 注册 -->
    <div v-if="!issignin" class="signup-div">
      <span style="font-size:20px; line-height:1.5em; text-align:center; font-weight:bold;">注册</span>
      <span style="margin: 10px auto;">
        <el-upload class="avatar-uploader" :action='this.baseURL+"/avatar"'
          :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
          <img v-if="imageLocalUrl" :src="imageLocalUrl" class="avatar">
          <i v-else class="el-icon-picture-outline-round avatar-uploader-icon"></i>
        </el-upload>
        <span style="font-size:13px; font-height:1em; color:#999999; text-align:center;">点击上传头像</span>
      </span>
      <el-form :model="infoForm" :rules="rules" ref="infoForm" label-width="60px" class="demo-ruleForm" v-loading="isloading2">
        <el-form-item label="昵称" prop="name">
          <el-input v-model="infoForm.name" placeholder="长度在3~8个字符"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input type="password" v-model="infoForm.pwd" autocomplete="off" placeholder="长度在6~10个字符"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="infoForm.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="生日" prop="birthday">
          <el-date-picker value-format="yyyy-MM-dd" type="date" placeholder="选择日期" v-model="infoForm.birthday" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="简述" prop="intro">
          <el-input type="textarea" v-model="infoForm.intro"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%;" @click="signup">注册</el-button>
        </el-form-item>
      </el-form>
      <span class="signin">已有账号？<u style="font-weight:bold; color:#409EFF; cursor:pointer;" @click="issignin = true">马上登陆</u></span>
    </div>

  </div>
</template>

<script>
import {login, signup} from '../../apis/sign.js'
  export default {
    data() {
      return {
        baseURL: process.env.BASE_API,
        issignin: true,
        name: '',
        pwd: '',
        imageUrl: '',
        imageLocalUrl: '',
        infoForm: {
          avatar: '',
          name: '',
          pwd: '',
          sex: '',
          birthday: null,
          intro: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
            { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
          ],
          pwd: [
            { required: true, message: '请设置密码', trigger: 'blur' },
            { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
          ]
        },
        isloading: false,
        isloading2: false
      }
    },
    methods: {
      signin() {
        // this.$message.success('登录成功！')
        login({
          name: this.name,
          pwd: this.pwd
        }).then(res => {
          this.$message.success('登录成功！')
          console.log('请求成功：', res)
        }).catch(err => {
          console.error('请求失败：', err)
        }).finally(() => {
          console.info('请求完成！')
        })
      },
      signup() {
        if(!this.infoForm.name || !this.infoForm.pwd) {
          this.$message.error('请填写完整信息！')
          return
        }
        this.isloading2 = true
        if(this.infoForm.birthday) {
          (this.infoForm.birthday).replace(/\//g, '-')
        }
        if(this.infoForm.sex) {
          this.infoForm.sex = this.infoForm.sex==='男'?'1':'0'
        }
        signup(this.infoForm).then(res=> {
          this.$message.success('注册成功！')
        }).catch(err=> {
          this.$message.error('注册失败！')
          console.error(err)
        }).finally(()=>{ this.isloading2 = false })
      },
      handleAvatarSuccess(res, file) {
        // console.log('res: ', res)
        this.imageLocalUrl = URL.createObjectURL(file.raw)
        // console.log('上传头像成功！', this.imageUrl)
        this.imageUrl = this.baseURL + (res.data.path || '')
        this.infoForm.avatar = 'http://localhost:3000' + (res.data.path || '')
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg'
        const isPNG = file.type === 'image/png'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isJPG && !isPNG) {
          this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return (isJPG || isPNG) && isLt2M
      }
    }
  }
</script>

<style scoped>
.signin-div, .signup-div{
  width: 270px; height: auto; padding: 27px 13px; align-content: center; display: flex; flex-flow: column;
  box-shadow: 0 0 7px 3px #cccccc; margin: auto; border-radius: 0px; position:relative; background-color: white;
}
.signin-div>span{
  width: 90%; margin: 10px auto;
}
.signup, .signin{
  font-size: 14px; display: flex; flex-flow: row; margin: auto;
}
.signup-div{
  width: 350px;
}

video{
  position: fixed; right: 0px; bottom: 0px; min-width: 100%; min-height: 100%; height: auto; width: auto; z-index:-11;
  /*加滤镜*/ /*filter: blur(15px); //背景模糊设置 */ /*-webkit-filter: grayscale(100%);*/ /*filter:grayscale(100%); //背景灰度设置*/  
}
source{
  min-width: 100%; min-height: 100%; height: auto; width: auto;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9; border-radius: 6px; cursor: pointer; position: relative; overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 50px; color: #8c939d; width: 60px; height: 60px; line-height: 60px; text-align: center;
}
.avatar {
  width: 60px; height: 60px; display: block;
}

</style>