<template>
	<div style="width:100%;">
		<div id="contactIcon">
			<div v-for="(item,index) in imgList" :key="index">
				<!-- <div id="hoverIcon" v-if="item.link=='javascript:;'">
					<img :src="item.img"/>
				</div> -->
				<a id="iconA" :href="item.link">
					<img v-if="item.link=='javascript:;'" class="qrcode" :src="item.img"/>
					<img :src="item.flag?item.src2:item.src1" @mouseover="overIcon(index)" @mouseout="outIcon(index)"/>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: 'myfooter',
        data(){
            return{
                imgList:[
                    {
                        src1:require('../../assets/images/contactImages/wechat0.png'),
                        src2:require('../../assets/images/contactImages/wechat1.png'),
                        flag:false,
                        link:'javascript:;',
                        img:require('../../assets/images/contactImages/微信账号二维码.jpg')
                    },
                    {
                        src1:require('../../assets/images/contactImages/qq0.png'),
                        src2:require('../../assets/images/contactImages/qq1.png'),
                        flag:false,
                        link:'javascript:;',
                        img:require('../../assets/images/contactImages/qq账号二维码.jpg')
                    },
                    {
                        src1:require('../../assets/images/contactImages/weibo0.png'),
                        src2:require('../../assets/images/contactImages/weibo1.png'),
                        flag:false,
                        link:'https://weibo.com/u/5795295209?is_all=1'
                    },
                    {
                        src1:require('../../assets/images/contactImages/csdn0.png'),
                        src2:require('../../assets/images/contactImages/csdn1.png'),
                        flag:false,
                        link:'https://blog.csdn.net/Holmesen'
                    },
                    {
                        src1:require('../../assets/images/contactImages/github0.png'),
                        src2:require('../../assets/images/contactImages/github1.png'),
                        flag:false,
                        link:'https://github.com/Holmesen'
                    },
                    {
                        src1:require('../../assets/images/contactImages/ins0.png'),
                        src2:require('../../assets/images/contactImages/ins1.png'),
                        flag:false,
                        link:'javascript:;',
                        img:require('../../assets/images/contactImages/Ins账号.jpg')
                    },
                    {
                        src1:require('../../assets/images/contactImages/Facebook0.png'),
                        src2:require('../../assets/images/contactImages/Facebook1.png'),
                        flag:false,
                        link:'https://www.facebook.com/holmesen.lin.7'
                    }
                ]
            }
        },
        methods: {
            overIcon:function(index){
                this.imgList[index].flag=true
            },
            outIcon:function(index){
                this.imgList[index].flag=false
            }
        }
    }
</script>

<style scoped>
#contactIcon{
	display: flex;
	flex-flow: row;
	height: 80px;
	width: 100%;
	background-color:currentColor;
	align-content: center;
	/* margin-top: 40px; */
	/* position:fixed;bottom:0;left:0;z-index: 99999; */
}
#contactIcon>div,#contactIcon img{
	height: 30px;
	width: 30px;
	margin: auto;
}
#contactIcon img:hover{
	cursor: pointer;
}
#hoverIcon{
	height: auto;
	width: 130px;
	display: flex;
	align-content: center;
	position: absolute;
}
#hoverIcon>img{
	height: 100%;
	width: 100%;
	margin: auto;
	top: -20px;
}
/* 弹出图片样式 */
#iconA {
	position: relative;
}
#iconA img.qrcode {
  position: absolute;
  z-index: 99;
  bottom: 50px;
  right: -50px;
  width: 7.5rem;
  max-width: none;
  height: auto;
  transform: scale(0);
  transform-origin: top right;
  opacity: 0;
  border: .3125rem solid #0085ba;
  border-radius: .25rem;
  -webkit-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
 
}
#iconA:hover img.qrcode {
    transform: scale(1);
    opacity: 1;
}
</style>