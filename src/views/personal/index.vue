<template>
  <div class="personal-div">
    <div class="top-div top-div-intro" v-if="this.showblock=='intro'"></div>
    <div class="top-div top-div-stu" v-if="this.showblock=='stu'"></div>
    <div class="top-div top-div-skill" v-if="this.showblock=='skill'"></div>
    <div class="top-div top-div-case" v-if="this.showblock=='case'"></div>

    <div class="content-div">
      <div class="block-div">
        <div style="display:flex;flex-flow:column;align-content:center;height:auto;width:auto;margin:-210px auto 0px auto;">
          <img style="height:240px;width:240px;border-radius:50%;margin: 10px auto;" src="../../assets/images/avatar.jpg" alt="">
          <span style="font-size:35px;font-weight:bold;width:fit-content;height:auto;line-height:2em;margin:10px auto;letter-spacing: 3px;">Holmesen</span>
        </div>
        <!-- 个人简介 -->
        <div class="intro-div" style="margin-top:0;">
          <h2>个人简介</h2>
          <p>
            一个练习两年半的个人练习生，喜欢唱、跳、rap、篮球
          </p>
        </div>
      </div>

      <!-- 学习生涯 -->
      <div class=" block-div stu-block">
        <div class="intro-div block-div">
          <h2>学习生涯</h2>
          <div class="study-div">
            <div class="study-part">
              <div style="height:auto;width:45%;margin: 0 auto;">
                <img src="../../assets/images/images/bg3.jpg" alt="">
              </div>
              <span style="text-align: center;margin-left:0px;">
                <h3 style="font-size:25px;margin:15px;">小学</h3>
                <div class="study-info-div">
                  <div>
                    <img src="../../assets/icon/school.png" alt="">
                    <span>东山县第二实验小学</span>
                  </div>
                  <div>
                    <img src="../../assets/icon/position.png" alt="">
                    <span>福建省漳州市东山县</span>
                  </div>
                </div>
                <p>占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......
                  占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......</p>
              </span>
            </div>
            <div class="study-part">
              <span style="text-align: center;margin-right:0px;">
                <h3 style="font-size:25px;margin:15px;">中学</h3>
                <div class="study-info-div">
                  <div>
                    <img src="../../assets/icon/school.png" alt="">
                    <span>东山县第二实验小学</span>
                  </div>
                  <div>
                    <img src="../../assets/icon/position.png" alt="">
                    <span>福建省漳州市东山县</span>
                  </div>
                </div>
                <p>占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......
                  占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......</p>
              </span>
              <div style="height:auto;width:45%;margin: 0 auto;">
                <img src="../../assets/images/images/bg3.jpg" alt="">
              </div>
            </div>
            <div class="study-part">
              <div style="height:auto;width:45%;margin: 0 auto;">
                <img src="../../assets/images/images/bg3.jpg" alt="">
              </div>
              <span style="text-align: center;margin-left:0px;">
                <h3 style="font-size:25px;margin:15px;">大学</h3>
                <div class="study-info-div">
                  <div>
                    <img src="../../assets/icon/school.png" alt="">
                    <span>东山县第二实验小学</span>
                  </div>
                  <div>
                    <img src="../../assets/icon/position.png" alt="">
                    <span>福建省漳州市东山县</span>
                  </div>
                </div>
                <p>占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......
                  占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      

      <!-- 所学技能 -->
      <div class="block-div skill-block">
        <h2>所学技能</h2>
        <div style="width:80%;margin: auto;display: flex;">
          <div id="mySkill" style="height:300px;width:45%;margin:50px auto;"></div>
          <div id="myProgram" style="height:300px;width:45%;margin:50px auto;"></div>
        </div>
      </div>

      <!-- 案例示例 -->
      <div class="block-div case-block">
        <h2>案例示例</h2>
        <div class="case">
          <div class="case-divs">
            <div v-for="(item,index) in '1234'" :key="index" class="case-div">
              <div class="case-imgdiv"><img src="../../assets/images/images/bg1.jpg" alt=""></div>
              <span>xxx</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 工作经历 -->
      <div class="block-div">
        <h2>工作经历</h2>
        <div style="width:70%;margin:40px auto;">
          <el-timeline :reverse='true'>
            <el-timeline-item v-for="(item, index) in workline" :key="index" icon="el-icon-s-cooperation" size="large" color="#0bbd87" :timestamp="item.date" placement="top" style="">
              <el-card style="margin-bottom:30px;">
                <div style="padding:10px 15px;display:flex;flex-flow:row;">
                  <div class="company-info" style="">
                    <div><b>公司：</b>{{item.company||''}}</div>
                    <div><b>地点：</b>{{item.place||''}}</div>
                    <div><b>职位：</b>{{item.job||''}}</div>
                    <div><b>内容：</b>{{item.work||''}}</div>
                    <div><b>案例：</b>{{item.cases||''}}</div>
                  </div>
                  <div class="company-icon" style="">
                    <img v-if="!!item.icon" :src="item.icon" style="width:100%;margin:auto;">
                  </div>
                </div>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jq from 'jquery'
var echarts = require('echarts')
  export default {
    name: 'personal',
    data() {
      return {
        showblock: 'intro',
        workline: [
          {
            date: '2018/08/01',
            company: '无',
            job: '无',
            work: [],
            place: '无',
            cases: [],
            icon: ''
          },{
            date: '至今',
            company: '厦门云当网络科技有限公司',
            job: '开发人员',
            work: ['负责微信小程序的开发','负责公司官网的开发','负责公司数据获取'],
            place: '福建省厦门市湖里区湖里大道1号新时代大厦',
            cases: ['云跟踪微信小程序','云当官网'],
            icon: '@/src/assets/icon/logo1-15.png'
          }
        ]
      }
    },
    mounted(){
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('mySkill'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '我的技能',
          left: 'center'
        },
        type: 'radar',
        tooltip: {
          trigger: 'axis'
        },
        radar: {
          indicator: [
            {name: 'Html', max: 100},
            {name: 'Css', max: 100},
            {name: 'JavaScript', max: 100},
            {name: 'Vue', max: 100},
            {name: 'NodeJS', max: 100},
            {name: 'Java', max: 100},
            {name: 'C#', max: 100},
            {name: 'C', max: 100}
          ],
          shape: 'circle',
          splitNumber: 5,
          name: {
            textStyle: {
              color: 'rgb(238, 197, 102)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(238, 197, 102, 0.1)'
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(238, 197, 102, 0.5)'
            }
          }
        },
        series: [
          {
            type: 'radar',
            tooltip: {
              trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
              {
                value: [90,80,75,80,65,75,90,65],
                name: '技能点'
              }
            ]
          }
        ]
      })

      var myChart2 = echarts.init(document.getElementById('myProgram'))
      myChart2.setOption({
        backgroundColor: '#ffffff',
        title: {
          text: '开发历程',
          left: 'center'
        },
        type: 'pie',
        visualMap: {
          show: false,
          min: 5,
          max: 30,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: '开发方向',
            type: 'pie',
            roseType: 'radius',
            data:[
              {value:25, name:'网站开发'},
              {value:5, name:'Android开发'},
              {value:30, name:'微信小程序开发'},
              {value:25, name:'Vue开发'},
              {value:15, name:'Java开发'}
            ].sort(function (a, b) { return a.value - b.value; }),
            label: {
              show: true,
              normal: {
                textStyle: {
                  color: 'rgba(255, 255, 255, 0.3)'
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              }
            },
            itemStyle: {
              normal: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
          }
        ]
      })

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
.top-div-stu{
  background: url('../../assets/images/images/bg2.jpg') no-repeat fixed center;
}
.top-div-skill{
  background: url('../../assets/images/images/bg1.jpg') no-repeat fixed center;
}
.top-div-case{
  background: url('../../assets/images/images/bg2.jpg') no-repeat fixed center;
}
.content-div{
  height: auto; width: 100%; display: flex; flex-flow: column;
  align-content: center; margin: auto; padding-top: 300px;
}
.block-div{
  background-color: white; width: 100%; margin: 100px auto; padding: 80px 0px;
}

.intro-div{
  height: auto; width: 75%; align-content: center; text-align: center;
  display: flex; flex-flow: column; margin: 40px auto;
}

.study-div{
  display: flex; flex-flow: column; width: 100%; height: auto;
}
.study-part{
  display: flex; flex-flow: row; width: 100%; height: auto; margin: 40px auto;
}
/* .study-part:nth-of-type(odd){
  float: left;margin: 20px auto 20px 10px;
}
.study-part:nth-of-type(even){
  float: right;margin: 20px 10px 20px auto;
} */
.study-part img{
  height: auto; width: 100%;
}
.study-part>span{
  height: auto; width: 45%; display: flex; flex-flow: column; margin: 0 auto;
}
.study-info-div{
  display: flex; flex-flow: row; margin: 10px auto;
}
.study-info-div>div{
  display: flex; flex-flow: row; align-content: center; margin: auto 30px auto 0px; width: fit-content;
}
.study-info-div>div>img{
  height: 30px; width: 30px; margin: auto;
}
.study-info-div>div>span{
  font-size: 14px; line-height: 30px; margin-left: 10px;
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

.company-info{
  display:flex;flex-flow:column;margin:auto;align-content:center;width:auto;flex-grow:1;height:auto;
}
.company-info>div{
  margin:auto auto auto 0px;font-size:18px;line-height:2em;
}
.company-icon{
  display:flex;flex-flow:column;margin:auto;align-content:center;width:80px;height:100%;
}
</style>