<template>
  <div class="personal-div">
    <div class="top-div top-div-intro" v-if="this.showblock=='intro'"></div>
    <div class="top-div top-div-stu" v-if="this.showblock=='stu'"></div>
    <div class="top-div top-div-skill" v-if="this.showblock=='skill'"></div>
    <div class="top-div top-div-case" v-if="this.showblock=='case'"></div>

    <!-- 修改信息弹出框 -->
    <el-dialog title="修改个人信息" :visible.sync="isEditInfo" width="30%">
      <el-form :model="infoForm" :rules="rules" ref="infoForm" label-width="60px" class="demo-ruleForm" v-loading="isloading2">
        <el-form-item label="昵称" prop="name">
          <el-input v-model="infoForm.name" placeholder="长度在3~8个字符"></el-input>
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
        <el-row><span style="color:#66B6FF;cursor:pointer;" @click="isEditPwd=true">修改密码</span></el-row>
      </el-form>
      <el-dialog width="30%" title="修改密码" :visible.sync="isEditPwd" append-to-body>
        <el-form :model="pwd" :rules="rules2" ref="pwdForm" label-width="80px" class="demo-ruleForm">
          <el-form-item label="原密码" prop="pwdOld">
            <el-input type="password" v-model="pwd.pwdOld" autocomplete="off" placeholder="长度在6~10个字符"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="pwdNew">
            <el-input type="password" v-model="pwd.pwdNew" autocomplete="off" placeholder="长度在6~10个字符"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="isEditPwd = false">取 消</el-button>
          <el-button type="primary" @click="isEditPwd = false">确 定</el-button>
        </div>
      </el-dialog>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isEditInfo = false">取 消</el-button>
        <el-button type="primary" @click="isEditInfo = false">确 定</el-button>
      </div>
    </el-dialog>

    <div class="content-div">
      <div class="block-div">
        <div style="display:flex;flex-flow:column;align-content:center;height:auto;width:auto;margin:-130px auto 0px auto;">
          <img style="height:240px;width:240px;border-radius:50%;margin: 10px auto;" src="../../assets/images/avatar.jpg" alt="">
          <span style="font-size:35px;font-weight:bold;width:fit-content;height:auto;line-height:2em;margin:10px auto;letter-spacing: 3px; display:flex; padding-left: 34px;">Holmesen<el-button style="margin:auto 10px;" icon="el-icon-edit" size="mini" circle @click="isEditInfo = true"></el-button></span>
        </div>
        <!-- 个人简介 -->
        <div class="intro-div" style="margin-top:0;">
          <p>一个练习两年半的个人练习生，喜欢唱、跳、rap、篮球</p>
        </div>
      </div>

      <div class="block-div">
        <el-divider>我的博客</el-divider>
        <div class="blog">
          <el-card shadow="hover" v-for="(item, index) in [1,2,3,4,5]" :key="index" class="blog-div" :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div class="blog-info">
              <span class="blog-title">好吃的汉堡</span>
              <span class="blog-brief">一个练习两年半的个人练习生，喜欢唱、跳、rap、篮球一个练习两年半的个人练习生，喜欢唱、跳、rap、篮球一个练习两年半的个人练习生，喜欢唱、跳、rap、篮球</span>
            </div>
            <div class="blog-btn">
              <span class="blog-date">2019-11-11 11:11:11</span>
              <span><el-button type="text" style="height:30px;line-height:30px;float:right;margin:auto 10px auto auto;padding:0;">修改</el-button></span>
            </div>
          </el-card>
        </div>

        <el-divider>生活记事</el-divider>
        <div class="life">
          <el-card shadow="hover" v-for="(item, index) in [1,2,3,4,5,6]" :key="index" class="life-div" :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div class="life-info">
              <span class="life-title">好吃的汉堡</span>
              <span class="life-brief">一个练习两年半的个人练习生，喜欢唱、跳、rap、篮球一个练习两年半的个人练习生，喜欢唱、跳、rap、篮球一个练习两年半的个人练习生，喜欢唱、跳、rap、篮球</span>
            </div>
            <div class="life-btn">
              <span class="life-date">2019-11-11 11:11:11</span>
              <span><el-button type="text" style="height:30px;line-height:30px;float:right;margin:auto 10px auto auto;padding:0;">修改</el-button></span>
            </div>
          </el-card>
        </div>

        <el-divider>时光相册</el-divider>
        <div class="case">
          <div class="case-divs">
            <div v-for="(item,index) in '1234'" :key="index" class="case-div">
              <div class="case-imgdiv"><img src="../../assets/images/images/bg1.jpg" alt=""></div>
              <span>xxx</span>
            </div>
          </div>
        </div>

        <el-divider>我的收藏</el-divider>
        <div class="blog">
          <el-card shadow="hover" v-for="(item, index) in [1,2,3,4,5]" :key="index" class="blog-div" :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div class="blog-info">
              <span class="blog-title">好吃的汉堡</span>
              <span class="blog-brief">一个练习两年半的个人练习生，喜欢唱、跳、rap、篮球一个练习两年半的个人练习生，喜欢唱、跳、rap、篮球一个练习两年半的个人练习生，喜欢唱、跳、rap、篮球</span>
            </div>
            <div class="blog-btn">
              <span class="blog-date">2019-11-11 11:11:11</span>
              <span><el-button type="text" style="height:30px;line-height:30px;float:right;margin:auto 10px auto auto;padding:0;">取消收藏</el-button></span>
            </div>
          </el-card>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {getUserAssets} from '../../apis/user.js'
import {isLogin} from '../../utils/auth.js'
var echarts = require('echarts')
  export default {
    name: 'personal',
    data() {
      return {
        showblock: 'intro',
        isEditInfo: false,
        isEditPwd: false,
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
            { required: true, message: '昵称不可为空！', trigger: 'blur' },
            { min: 3, max: 8, message: '长度在3~8个字符', trigger: 'blur' }
          ],
          pwd: [
            { required: true, message: '请设置密码', trigger: 'blur' },
            { min: 6, max: 10, message: '长度在6~10个字符', trigger: 'blur' }
          ]
        },
        pwd: {
          pwdOld: '',
          pwdNew: ''
        },
        rules2: {
          pwdOld: [
            { required: true, message: '密码不能为空！', trigger: 'blur' },
            { min: 6, max: 10, message: '长度在6~10个字符', trigger: 'blur' }
          ],
          pwdNew: [
            { required: true, message: '密码不能为空！', trigger: 'blur' },
            { min: 6, max: 10, message: '长度在6~10个字符', trigger: 'blur' }
          ]
        },
        isloading: false,
        isloading2: false
      }
    },
    mounted() {
      if(isLogin()) {
        getUserAssets({
          ukeyid: this.$store.getters.keyid
        }).then(res=> {
          if(res.data.success) {
            if(res.data.message) {
              this.$message(res.data.message)
            } else {
              //
            }
          }
          console.log(res)
        }).catch(err=> {
          console.error(err)
        })
      }
    }
  }
</script>

<style scoped>
.el-timeline-item__timestamp{
  text-align: left !important;
}
.personal-div{
  height: auto; width: 100%; display: flex; flex-flow: column; align-content: center;
}
.top-div{
  height: 100vh; width: 100vw; position: fixed; top: 0; left: 0; z-index: -999;
}
.top-div-intro{
  background: url('../../assets/images/images/bg3.jpg') no-repeat fixed center;
}
.content-div{
  height: auto; width: 100%; display: flex; flex-flow: column;
  align-content: center; margin: auto; padding-top: 300px;
}
.block-div{
  background-color: white; width: 100%; margin: 0px auto;
}

.intro-div{
  height: auto; width: 75%; align-content: center; text-align: center;
  display: flex; flex-flow: column; margin: 40px auto;
}

.case{
  display: flex; flex-flow: row; width: 70%; height: auto; align-content: center; margin: 20px auto;
}
.case-divs{
  width: 100%; height: auto; display: flex; flex-flow: row; flex-wrap: wrap; align-content: center;
}
.case-div{
  width: 45%; height: auto; margin: 20px auto; display: flex; flex-flow: column; align-content: center;
}
.case-imgdiv{
  width: 100%; max-height: calc(100% - 40px); display: flex; flex-flow: row; overflow: hidden;
}
.case-imgdiv>img{
  width: 100%; height: auto; margin: auto;
}
.case-div>span{
  text-align: center; margin: auto; width: auto; line-height: 2em; font-size: 20px;
}
.case-div>span{
  cursor: pointer;
}

.case-imgdiv img {
  display: block; border: 0; width: 100%; transform: scale(1); transition: all 1s ease 0s;
  -webkit-transform: scale(1); -webkit-transform: all 1s ease 0s;
}
.case-imgdiv:hover img {
  cursor: pointer; transform: scale(1.3); transition: all 1s ease 0s;
  -webkit-transform: scale(1.3); -webkit-transform: all 1s ease 0s;
}

#work-experience::before {
  content:'\260E'; font-size: 15px;
}

.block-div /deep/ .el-divider--horizontal{
  width: 70%; margin: 30px auto 10px auto;
}
.block-div /deep/ .el-divider__text{
  font-size: 18px; font-weight: bold; color: darkgray;
}
.blog, .life{
  display:flex; flex-flow:row; width:70%; margin:auto; height: auto; flex-wrap: wrap;
}
.blog-div, .life-div{
  width: 30%; height: 330px; display: flex; flex-flow: column; margin: 20px 1.5%; cursor: pointer;
}
.blog-img, .life-img{
  width: 100%; height: 94px;
}
.blog-img>img, .life-img>img{
  width: 100%; height: 100%;
}
.blog-info, .life-info{
  width: calc(100% - 20px); display: flex; flex-flow: column; height: 76px; padding: 5px 10px;
}
.blog-info>span, .life-info>span{
  margin: auto;
}
.blog-title, .life-title{
  width: 100%; font-size: 17px; line-height: 20px; text-align: center;
}
.blog-date, .life-date{
  width: auto; font-size: 12px; line-height: 30px; text-align: center; margin-left: 10px;
}
.blog-brief, .life-brief{
  width: 100%; height: 36px; font-size: 15px; line-height: 18px; display: -webkit-box; -webkit-box-orient: vertical; 
  -webkit-line-clamp: 2; overflow: hidden; text-overflow: ellipsis; word-break: break-all;
}
.blog-btn, .life-btn{
  width: 100%; height: 30px; line-height: 30px;display: flex; flex-flow: row; justify-content: space-between;
}
.blog-btn:nth-child(odd), .life-btn:nth-child(odd){
  margin: auto auto auto 0px;
}
.blog-btn:nth-child(even), .life-btn:nth-child(even){
  margin: auto 0px auto auto;
}

.blog /deep/ .el-card__body, .life /deep/ .el-card__body{
  height: 100% !important;
}
.blog /deep/ .el-card__body>img, .life /deep/ .el-card__body>img{
  height: 200px !important;
}

.image {
  width: 100%; display: block;
}
</style>