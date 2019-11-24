<template>
	<div>
		<div class="top">
			<div class="title">
				<span class="title1">个人博客</span>
				<span class="title2"><i>相逢的人会再相聚</i></span>
			</div>
		</div>

		<div class="blogs">
			<div class="blog-div" v-for="(item,index) in [1,2,3,4,5]" :key="index">
				<div class="blog-img">
					<img src="../../assets/images/avatar.jpg" alt="">
				</div>
				<div class="blog-content">
					<div class="content-title">内容标题</div>
					<div class="content-author">
						<span><i class="el-icon-user-solid"></i>Holmesen</span>
						<span><i class="el-icon-date"></i>2019/07/19</span>
						<span><i class="el-icon-view"></i>123</span>
					</div>
					<div class="content">
						内容简要占位置内容简要占位置内容简要占位置内容简要占位置内容简要占位置
						内容简要占位置内容简要占位置内容简要占位置内容简要占位置内容简要占位置
						内容简要占位置内容简要占位置内容简要占位置内容简要占位置内容简要占位置
						内容简要占位置内容简要占位置内容简要占位置内容简要占位置内容简要占位置
						内容简要占位置内容简要占位置内容简要占位置内容简要占位置内容简要占位置
						内容简要占位置内容简要占位置内容简要占位置内容简要占位置内容简要占位置
					</div>
					<div class="content-more" @click="toInfo">read more →</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'blog',
		data() {
			return {
				//
			}
		},
		methods: {
			toInfo() {
				this.$router.push({path: '/blog/blogInfo'})
			}
		}
	}
</script>

<style scoped>
*{
	display: flex; flex-flow: column; align-content: center;
}
.top{
	height: 400px; width: 100%; background: url('../../assets/images/images/bg3.jpg') no-repeat center;
	background-size: 100%; display: flex; flex-flow: column;
}
.title{
	width: fit-content; height: auto; margin: auto 200px auto auto; display: flex; flex-flow: column; color: white;
}
.title1{
	font-size: 40px; font-weight: bold; line-height: 2em; margin: auto 160px 30px auto; letter-spacing: 25px;
	font-family: cursive;
}
.title2{
	font-size: 20px; line-height: 2em; margin: auto 0px auto auto; letter-spacing: 25px; font-family: cursive;
}
.blogs{
	width: 60%; margin: auto;
}
.blog-div{
	width: 100%; padding: 25px 0; flex-flow: row; border-bottom: solid 1px #dcdcdc;
}
.blog-img{
	height: 200px; width: 200px; min-width: 200px;
}
.blog-img>img{
	width: 100%; height: auto;
}
.blog-content{
	width: auto; height: 200px; flex-grow: 1; flex-flow: column; text-align: left; margin-left: 20px;
}
.content{
	height: auto; width: 100%; flex-grow: 1; font-size: 18px; line-height: 40px;
	display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;
	overflow: hidden; text-overflow: ellipsis; word-break: break-all;
}
.content-title{
	font-size: 20px; font-weight: bold; line-height: 40px;
}
.content-author{
	flex-flow: row; float: left;
}
.content-author>span{
	margin: auto 20px auto 0px; flex-flow: row; font-size: 15px; line-height: 40px;
}
.content-author>span>i{
	height: 16px; margin: auto 5px auto 0px;
}
.content-more{
	font-size: 16px; line-height: 50px; cursor: pointer; width: fit-content; color: cadetblue;
}
</style>