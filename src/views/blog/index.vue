<template>
	<div>
		<div class="top">
			<div class="title">
				<span class="title1">个人博客</span>
				<span class="title2"><i>相逢的人会再相聚</i></span>
			</div>
		</div>

		<div class="blogs">
			<div class="blog-div" v-for="(item,index) in blogList" :key="index">
				<div class="blog-img">
					<img :src="item.imgSrc" :alt="item.title" :title="item.title">
				</div>
				<div class="blog-content">
					<div class="content-title" :title="item.title">{{item.title}}</div>
					<div class="content-author">
						<span><i class="el-icon-user-solid"></i>{{item.user}}</span>
						<span><i class="el-icon-date"></i>{{item.updateTime || item.date}}</span>
						<span><i class="el-icon-view"></i>{{item.views}}</span>
					</div>
					<div class="content">{{item.description}}</div>
					<div class="content-more" @click="toInfo(item.keyid)">Read More →</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {getBlogList} from '../../apis/blog.js'
	export default {
		name: 'blog',
		data() {
			return {
				blogList: [],
				loading: null
			}
		},
		methods: {
			toInfo(blogId) {
				this.$router.push({path: '/blog/blogInfo/'+blogId})
			}
		},
		mounted() {
			this.loading = this.$loading({
				lock: true,
				text: 'Loading...',
				spinner: 'el-icon-loading',
				background: 'rgba(0, 0, 0, 0.7)'
			})
			getBlogList().then(res=> {
				debugger
				if(res.data.success) {
					if(res.data.data && res.data.data.length>0) {
						var ele = document.createElement("div")
						res.data.data.forEach(el => {
							ele.innerHTML = el.content
							el.description = (ele.innerText).substring(0, 100)
							let imgs = ele.getElementsByTagName("img")
							let src = '../../../static/images/noImage.jpg'
							if(imgs && imgs.length>0) {
								src = imgs[0].src
							}
							el.imgSrc = src
						})
						this.blogList = res.data.data
					}
				} else {
					this.$notify({
						title: '获取博客',
						message: res.data.message || '博客获取失败',
						type: 'error'
					})
				}
			}).catch(err=> {
				console.error(err)
				this.$notify({
					title: '获取博客',
					message: '博客获取失败',
					type: 'error'
				})
			}).finally(()=>{this.loading.close()})
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
	width: 100%; height: 100%; margin: auto;
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
	display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;
	overflow: hidden; text-overflow: ellipsis; word-break: break-all;
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