<template>
  <div id="home-div">
    <!-- <div class="home-cover"></div> -->
    <!-- <myheader></myheader> -->
    <!-- <div class="bg-img"></div> -->
    <div class="contain-div home-bg">
      <div class="_welcome"></div>
      <div class="welcome_">
        <div class="welcome">
          <p style="letter-spacing: 3px;">Welcome To My Website</p>
          <p style="font-size:45px;"><span class="text-slider-items" style="display:none;">Web Developer,Web Designer,Frontend Developer</span><strong class="text-slider"></strong></p>
        </div>
      </div>
    </div>
    <div class="contain-div contain1 bg-gray">
      <div class="title">
        <span>SKILL</span>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
      </div>
      <div class="contain2 skill-div">
        <div class="skill" v-for="(item, index) in skillData" :key="index">
          <!-- <div class="skill-cyclo"></div> -->
          <span class="skill-name">{{item.name}}</span>
          <span style="width:126px;margin:auto;"><el-progress type="circle" :percentage="item.value"></el-progress></span>
          <span class="skill-sub">{{item.subscript}}</span>
        </div>
      </div>
    </div>
    <div class="contain-div count-bg">
      <div class="_count"></div>
      <div class="count_">
        <div class="count">
          <div class="count-div" v-for="(item,index) in countData" :key="index">
            <span id="count-icon"><i :class="item.icon"></i></span>
            <span>{{item.value}}</span>
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="contain-div contain1 bg-gray">
      <div class="title">
        <span>BLOG</span>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
      </div>
      <div class="contain2 blog">
        <div class="blog-div bg-white" v-for="(blog,index) in 6" :key="index">
          <div class="blog-img"><img src="../../assets/images/images/denys-w.jpg" alt=""></div>
          <div class="blog-tags"><span v-for="(tag,idx) in 3" :key="idx">标签</span></div>
          <div class="blog-content">
            <strong>博客标题</strong>
            <span>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</span>
          </div>
          <div class="blog-author">
            <span>
              <img src="../../assets/images/avatar.jpg" alt="" style="width:100%;height:100%;">
              <span>Holmesen</span>
            </span>
            <span><i class="el-icon-time" style="margin-right:7px;font-size:20px;line-height:35px;"></i>10 min</span>
          </div>
        </div>
      </div>
    </div>
    <div class="contain-div quote-bg">
      <div class="_quote"></div>
      <div class="quote_">
        <div class="quote">
          <div class="quote-div" v-for="(item,index) in 3" :key="index">
            <img src="../../assets/images/avatar.jpg" alt="">
            <span><strong style="font-size:20px;">Holmesen</strong><br> Hello World {{index}} ! </span>
          </div>
        </div>
      </div>
    </div>
    <div class="contain-div contain1 bg-gray">
      <div class="title">
        <span>PICTURE</span>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
      </div>
      <div class="contain2 picture">
        <div class="picture-div bg-white" v-for="(pic,index) in 6" :key="index">
          <img style="width:300px;height:200px;margin:auto;" src="../../assets/images/home/landscape.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="contain-div contact-bg">
      <div class="_contact"></div>
      <div class="contact_">
        <div class="contact">
          <strong>Contact Me</strong>
          <div class="contact-me">
            <div class="contact-way">
              <span><i class="el-icon-message"></i>holmesenlin@gmail.com</span>
              <span><i class="el-icon-office-building"></i>厦门云当网络科技有限公司</span>
              <span><i class="el-icon-location-outline"></i>福建省厦门市湖里区</span>
              <span><img src="../../assets/images/home/map.png" alt="" style="width:100%;height:100%;"></span>
            </div>
            <div class="contact-msg">
              <div>
                <input type="text" placeholder="Name">
                <input type="text" placeholder="Email / QQ / WeChat / Mobile">
                <input type="text" placeholder="Subject">
                <textarea rows="3" style="height: 90px;font-weight: bold;" placeholder="Message"></textarea>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import myheader from '@/components/header/index.vue'
import $ from 'jquery'
  export default {
    name: 'home',
    data(){
      return {
        skillData: [
          {
            name: 'HTML',
            value: 0,
            subscript: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
          },
          {
            name: 'CSS',
            value: 0,
            subscript: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
          },
          {
            name: 'JAVASCRIPT',
            value: 0,
            subscript: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
          },
          {
            name: 'Vue',
            value: 0,
            subscript: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
          },
          {
            name: 'NodeJS',
            value: 0,
            subscript: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
          },
          {
            name: 'MiniProgram',
            value: 0,
            subscript: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
          }
        ],
        countData: [
          {
            name: 'Book',
            value: '30',
            icon: 'el-icon-reading'
          },
          {
            name: 'Hobby',
            value: '8',
            icon: 'el-icon-coordinate'
          },
          {
            name: 'Movie',
            value: '70',
            icon: 'el-icon-film'
          },
          {
            name: 'Music',
            value: '140',
            icon: 'el-icon-headset'
          }
        ]
      }
    },
    components: {
      // myheader
    },
    mounted(){
      if ($('.text-slider').length == 1) {
        var typed_strings = $('.text-slider-items').text()
        var typed = new Typed('.text-slider', {
          strings: typed_strings.split(','),
          typeSpeed: 80,
          loop: true,
          backDelay: 1100,
          backSpeed: 30
        })
      }
      let i_h = setInterval(() => {
        this.skillData[0]['value']++
        if(this.skillData[0]['value'] >= 70) {
          clearInterval(i_h)
        }
      }, 150);
      let i_c = setInterval(() => {
        this.skillData[1]['value']++
        if(this.skillData[1]['value'] >= 35) {
          clearInterval(i_c)
        }
      }, 150);
      let i_j = setInterval(() => {
        this.skillData[2]['value']++
        if(this.skillData[2]['value'] >= 85) {
          clearInterval(i_j)
        }
      }, 150);
      let i_v = setInterval(() => {
        this.skillData[3]['value']++
        if(this.skillData[3]['value'] >= 90) {
          clearInterval(i_v)
        }
      }, 150);
      let i_n = setInterval(() => {
        this.skillData[4]['value']++
        if(this.skillData[4]['value'] >= 60) {
          clearInterval(i_n)
        }
      }, 150);
      let i_m = setInterval(() => {
        this.skillData[5]['value']++
        if(this.skillData[5]['value'] >= 100) {
          clearInterval(i_m)
        }
      }, 150);
    }
  }
</script>

<style scoped>
.quote{
  width: 70%; display: flex; flex-flow: column; margin: auto; 
}
.quote-div{
  display: flex; flex-flow: row; width: 60%;
}
.quote-div:nth-of-type(odd){
  margin: 15px auto 15px 0px; 
}
.quote-div:nth-of-type(even){
  margin: 15px 0px 15px auto; flex-flow: row-reverse;
}
.quote-div:nth-of-type(even)>span{
  text-align: right;
}
.quote-div>img{
  width: 50px; height: 50px; border-radius: 50%; border: solid 1px white; box-shadow: 0 0 3px 1px #cbcbcb; margin:0 10px;
}
.quote-div>span{
  width: 100%; height: 70px; text-align: left; padding: 15px 20px; background-color: white; border-radius: 4px;
  font-size: 17px; letter-spacing: 1px; line-height: 1.5;
}
/* *{z-index: 5;} */
#home-div{
  width: 100%; height: auto; background-color: #f5f5f5; display: flex; flex-flow: column; position: relative;
}
.home-bg{
  height: 100vh; width: 100%; background: url('../../assets/images/home/intro-bg.jpg') no-repeat center;
  background-attachment:fixed;
}
.contain-div{
  width: 100%; display: flex; flex-flow: column; margin: 0; position: relative;
}
.bg-gray{
  background-color: #f5f5f5; 
}
.bg-white{
  background-color: white;
}
.contain1{
  padding: 30px 0;
}
.contain2{
  width: 70%; height: auto; margin: 20px auto; padding: 10px;
}
.title{
  padding: 20px; display: flex; flex-flow: column;
}
.title>span:first-child{
  font-size: 40px; line-height: 1.5; font-weight: bold; margin: auto auto 10px auto; text-align: center; 
  border-bottom: solid 2px steelblue; letter-spacing: 5px;
}
.title>span:last-child{
  font-size: 16px; line-height: 1.3; color: #6d6d6d; margin: auto; text-align: center;
}
._welcome,._count,._quote,._contact{
  height: 100%; width: 100%; position: absolute; top: 0; left: 0; background-color: rgba(0, 0, 0, 0.6);
}
.welcome_,.count_,.quote_,.contact_{
  height: 100%; width: 100%; position: absolute; top: 0; left: 0; display: flex;
}
.welcome,.count-div,.contact-div{
  margin:auto; display: flex; flex-flow: column;
}
.welcome>p{
  font-size: 60px; line-height: 1; color: white; margin: 2rem auto;
}
.skill-div{
  display: flex; flex-flow: row; flex-wrap: wrap;
}
.skill{
  padding: 20px 10px; display: flex; flex-flow: column; min-width: 120px; margin:15px auto; max-width: 29%;
  background-color: white; box-shadow: 0 0 4px 2px #cdcdcd; border-radius: 5px; min-width: 240px;
}
.skill-cyclo{
  width: 100px; height: 100px; border-radius: 50%; margin: auto; background: white; border: solid 10px red; 
}
.skill-name{
  font-size: 23px; line-height: 1.5; font-weight: bold; letter-spacing: 3px; text-align: center; margin-bottom: 10px; color: cadetblue;
}
.skill-sub{
  width: 80%; margin: 10px auto; font-size: 15px; line-height: 1.5;
}

.count-bg{
  height: 300px; width: 100%; background: url('../../assets/images/home/count-bg.jpg') no-repeat center;
  background-attachment:fixed;
}
.count{
  width: 70%; display: flex; flex-flow: row; margin: auto; min-width: 560px;
}
.count-div{
  width: 22%; padding: 20px 0; margin: auto; min-width: 125px;
}
.count-div>span{
  font-size: 30px; line-height: 1; font-weight: bold; text-align: center; margin: 10px auto; color: snow;
  text-transform: uppercase; letter-spacing: 4px;
}
#count-icon{
  width: 80px; height: 80px; line-height: 80px; border: solid 8px snow; border-radius: 50%; letter-spacing: 0;
}

.blog,.picture{
  display: flex; flex-flow: row; flex-wrap: wrap; max-width:1300px;
}
.blog-div,.picture-div{
  width: 300px; padding: 15px; display: flex; flex-flow: column; margin: 15px auto; 
  box-shadow: 0 0 5px 2px rgba(210,210,210,0.8); border-radius: 3px;
}
.blog-img,.blog-img>img{
  width: 100%; height: 200px; 
}
.blog-tags{
  width: 100%; display: flex; flex-flow: row; padding: 10px 0;
}
.blog-tags>span{
  padding: 5px 10px; background-color: dodgerblue; color: white; text-align: center; 
  font-size: 12px; line-height: 1; margin: auto 0 auto 10px;
}
.blog-tags>span:first-child{
  margin-left: auto;
}
.blog-content{
  width: 100%; display: flex; flex-flow: column; padding-bottom: 10px;
}
.blog-content>strong{
  font-size: 17px; font-weight: bold; line-height: 1.3; text-align: center;
}
.blog-content>span{
  font-size: 15px; line-height: 1; color: #6d6d6d; margin-top: 7px;
}
.blog-author{
  width: 100%; padding-top: 10px; display: flex; flex-flow: row; justify-content: space-between; border-top: solid 1px #dfdfdf;
}
.blog-author>span:first-child{
  width: 35px; height: 35px; display: flex; flex-flow: row; margin: auto auto auto 0; font-size: 16px; line-height: 35px; letter-spacing: 1px;
}
.blog-author>span:first-child>img{
  border-radius: 50%; margin-right: 7px;
}
.blog-author>span:last-child{
  display: flex; flex-flow: row; margin: auto 0 auto auto; font-size: 14px; line-height: 35px; 
}

.quote-bg{
  height: 500px; width: 100%; background: url('../../assets/images/home/comment.jpg') no-repeat center;
  background-attachment: fixed;
}

.contact-bg{
  height: 500px; width: 100%; background: url('../../assets/images/home/contact.jpg') no-repeat center;
  background-attachment: fixed;
}
.contact{
  width: 70%; margin: auto; display: flex; flex-flow: column;
}
.contact>strong{
  font-size: 40px; letter-spacing: 2px; line-height: 2; text-align: center; color: white;
}
.contact-me{
  width: 100%; display: flex; flex-flow: row; justify-content: space-between;
}
.contact-way{
  width: 50%; height: 100%; display: flex; flex-flow: column; padding: 10px; border-right: dashed 1px white;
}
.contact-way>span{
  width: 100%; display: flex; flex-flow: row; margin: 0 auto 20px 0; font-size: 16px; line-height: 20px; 
  letter-spacing: 1px; color: white;
}
.contact-way>span>i{
  font-size: 18px; line-height: 20px; margin-right: 7px;
}
.contact-way>span:last-child{
  width: 300px; border: solid 5px white;
}
.contact-msg{
  width: 50%; height: auto; display: flex; flex-flow: column; padding: 10px;
}
.contact-msg>div{
  width: 400px; margin: 0 0 0 auto; display: flex; flex-flow: column;
}
.contact-msg>div>input,.contact-msg>div>textarea{
  width: calc(100% - 20px); height: 20px; border: solid 1px #dadada; padding: 10px; color: black;
  letter-spacing: 1px; background-color: white; margin-bottom: 23px; font-size: 17px; line-height: 20px;
}
.contact-msg>div>button{
  font-weight: bold; cursor: pointer; margin: auto; padding: 10px 30px; height: 50px; font-size: 20px; 
  background-color: dodgerblue; color: white; letter-spacing: 3px;
}

.picture-div>img{
  filter: blur(0px);
  transition: all 1s;
}
.picture-div>img:hover{
  cursor: pointer;
  filter: blur(20px)
}
</style>