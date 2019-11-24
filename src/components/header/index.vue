<template>
	<div style="width:100%;">
		<div class="myheader" style="">
			<!-- 图标logo -->
			<div class="header-logo"><img src="../../assets/logo-Holmesen.png" alt=""></div>
			<div class="header-nav">
				<!-- 导航 -->
				<div class="header-navigator">
					<span><router-link style="color: cadetblue;text-decoration: none;" to="/">首页</router-link></span>
					<span><router-link style="color: cadetblue;text-decoration: none;" to="/blog">个人博客</router-link></span>
					<span><router-link style="color: cadetblue;text-decoration: none;" to="/album">时光相册</router-link></span>
					<span><router-link style="color: cadetblue;text-decoration: none;" to="/life">生活记事</router-link></span>
				</div>
				<!-- 登录者头像名称 -->
				<div class="header-user">
					<a href="/personal" style="display: flex;">
						<img src="../../assets/images/avatar.jpg" alt="" @click="toPersonal">
						<span>Holmesen</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'myheader',
		methods: {
			toPersonal(){
				this.$router.push('/personal')
			}
		}
	}
</script>

<style scoped>
.myheader{
	width:100%;display:flex;flex-flow:row;justify-content:space-between;padding:10px 20px;
	position:fixed;top:0;left:0;height: 70px;background-color: currentColor;z-index: 999;
}
.header-logo{
	margin:auto 10px;height:80%;display: flex;flex-flow: row;height: 100%;align-content: center;
}
.header-logo>img{
	height: 80%; margin: auto;
}
.header-nav{
	margin: auto 10px;display: flex;flex-flow: row; height: 100%;
}
.header-navigator{
	margin: auto 50px;display: flex;flex-flow: row;align-content: center;text-align: center;
}
.header-navigator>span{
	font-size: 15px; line-height: 2em; margin: auto 20px; font-weight: bold; color: cadetblue; cursor: pointer;
}
.header-user{
	margin: auto 50px;display: flex;flex-flow: row;align-content: center;text-align: center; height: 100%; cursor: pointer;
}
.header-user img{
	height: 90%;border-radius: 100%;
}
.header-user span{
	font-size: 15px; line-height: 2em;margin: auto 20px;font-weight: bold;letter-spacing: 2px;color: white;
}
</style>