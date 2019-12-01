<template>
	<div>
		<h2 style="margin-top: 80px; etter-spacing: 7px; font-size: 26px;">{{blog.title}}</h2>
		<div class="author-div">
			<span><i class="el-icon-user-solid"></i>{{blog.user}}</span>
			<span><i class="el-icon-date"></i>{{blog.updateTime || blog.date}}</span>
			<span v-if="blog.place"><i class="el-icon-location-outline"></i>{{blog.place || ''}}</span>
			<span v-if="blog.weather"><i class="el-icon-sunny"></i>{{blog.weather ||''}}</span>
			<span><i class="el-icon-view"></i>{{blog.views}}</span>
		</div>
		<!-- 博客内容 -->
		<div id="blog-content" class="content-div" v-html="blog.content"></div>
		<!-- 操作 -->
		<div class="operate">
			<span><i class="iconfont iconfavor" style="font-size:27px;"></i>收藏</span>
			<span><i class="iconfont iconappreciate" style="font-size:27px;" @click="zan" :style="{color: hasZan?'red':'#2c3e50'}"></i>{{blog.zan}}</span>
			<span><i class="iconfont iconoppose_light" style="font-size:27px;" @click="cai" :style="{color: hasCai?'red':'#2c3e50'}"></i>{{blog.cai}}</span>
			<span><i class="iconfont iconshare" style="font-size:27px;"></i>分享</span>
		</div>
		<div class="other">
			<span><i class="el-icon-d-arrow-left"></i>上一篇：XXX博客</span>
			<span>下一篇：XXX博客<i class="el-icon-d-arrow-right"></i></span>
		</div>
		<!-- 评论 -->
		<div class="editor-div">
			<el-divider content-position="left" style="font-size:16px;font-weight:bold;">发表评论</el-divider>
			<div ref="editor" style="text-align:left"></div>
			<div class="submit"><el-button type="primary" round @click="Comment">发表评论</el-button></div>
		</div>
		<div class="comment-div">
			<div v-for="(item,index) in [1,2,3]" :key="index">
				<div class="comment-top">
					<div class="comment-top-left">
						<img src="../../assets/images/avatar.jpg" alt="">
						<span>Holmesen</span>
						<span>2019/07/14</span>
					</div>
					<div class="comment-top-right">
						<span><i class="iconfont iconappreciate" style="font-size:18px;margin-right:5px;"></i>999</span>
						<span><i class="iconfont iconoppose_light" style="font-size:18px;margin-right:5px;"></i>666</span>
					</div>
				</div>
				<div class="comment-bottom">
					<span>
						<p>埼玉在独自做了一段时间英雄后，与弟子杰诺斯一起，正式加入英雄协会，与众多英雄一起开始了对抗各种怪人以及灾难的生活。不过经常是在无人知晓的情况下做英雄的工作。<img src="http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png" alt="[坏笑]" data-w-e="1"></p>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import E from 'wangeditor'
import {getBlogList2Id, operateBlog} from '../../apis/blog.js'
	export default {
		name: 'blogInfo',
		data() {
			return {
				editorContent: '',
				blog: {
					category: [],
					title: '',
					user: '',
					date: '',
					place: '',
					weather: '',
					content: '',
					views: 0,
					zan: 0,
					cai: 0,
					collect: 0,
					share: 0,
					updateTime: ''
				},
				hasZan: false,
				hasCai: false,
				editor: null,
				comment: {
					user: '',
					ukeyid: '',
					blogId: '',
					content: ''
				}
			}
		},
		mounted() {
			if(this.$route.params.id) {
				this.comment.blogId = this.id = this.$route.params.id
				this.comment.user = this.$store.getters.name
				this.comment.ukeyid = this.$store.getters.keyid
				getBlogList2Id(this.id).then(res=> {
					this.blog = res.data.data[0]
					operateBlog({
						blogId: this.id,
						ukeyid: this.$store.getters.keyid || '',
						type: 'views'
					}).then(res=> {
						if(res.success) {
							this.blog.views += 1
						}
					}).catch(err=> {
						console.error(err)
					})
				})
				this.initEditor()
			} else {
				this.$router.push({path: '/blank'})
			}
		},
		methods: {
			Comment() {
				// console.log(this.editorContent)
			},
			initEditor() {
				this.editor = new E(this.$refs.editor)
				this.editor.customConfig = {
					// 上传图片到服务器的地址
					uploadImgServer: process.env.BASE_API + '/upload/comment-image',
					// 限制一次最多上传 1 张图片
					uploadImgMaxLength: 1,
					// 修改字段名
					uploadFileName: 'file',
					// 图片上传钩子
					uploadImgHooks: {
						// 图片上传之前触发
						before: function (xhr, editor, files) {
							// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
							document.body.style.cursor = 'wait'
						},
						success: (xhr, editor, result)=> {
							// 图片上传并返回结果，图片插入成功之后触发
							// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
							document.body.style.cursor = 'auto'
						},
						// 图片上传并返回结果，但图片插入错误时触发
						fail: function (xhr, editor, result) {
							// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
							document.body.style.cursor = 'auto'
						},
						// 图片上传出错时触发
						error: function (xhr, editor) {
							// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
							document.body.style.cursor = 'auto'
						},
						// 图片上传超时时触发
						timeout: function (xhr, editor) {
							// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
							document.body.style.cursor = 'auto'
						},
						// 图片上传并返回结果，自定义插入图片的事件
						customInsert: function (insertImg, result, editor) {
							// insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
							var url = result.data.path
							insertImg(url)
							// result 必须是一个 JSON 格式字符串！！！否则报错
						}
					},
					// 编辑区值改变事件
					onchange: (html) => {
						this.comment.content = html
					},
					// 支持粘贴的事件
					pasteTextHandle: (content) => { //支持粘贴
						return content
					}
				}
				this.editor.create()
			},
			zan() {
				if(!this.hasZan) {
					operateBlog({
						blogId: this.id,
						ukeyid: this.$store.getters.keyid,
						type: 'zan'
					}).then(res=> {
						if(res.data.success) {
							this.blog.zan += 1
							this.hasZan = true
						}
					}).catch(err=> {
						console.error(err)
					})
				} else {
					this.$message('你已经赞过了哦~')
				}
			},
			cai() {
				if(!this.hasCai) {
					operateBlog({
						blogId: this.id,
						ukeyid: this.$store.getters.keyid,
						type: 'cai'
					}).then(res=> {
						if(res.data.success) {
							this.blog.cai += 1
							this.hasCai = true
						}
					}).catch(err=> {
						console.error(err)
					})
				} else {
					this.$message('你已经踩过了哦，请手下留情吧~')
				}
			}
		}

	}
</script>

<style scoped>
/* *{
	display: flex; flex-flow: column; align-content: center;
} */
.author-div{
	display: flex; flex-flow: row; width: 60%; margin: auto;
}
.author-div>span{
	margin: auto; display: flex; flex-flow: row; font-size: 17px; line-height: 40px;
}
.author-div>span>i{
	height: 18px; margin: auto 5px auto 0px;
}
.image-div{
	width: 60%; height: auto; margin: 10px auto;
}
.image-div>img{
	max-width: 100%; height: auto;
}
/* .image-div>div{
	width: 100%; height: 100%; background: url('../../assets/images/images/bg3.jpg') no-repeat center; background-size:cover;
} */
.content-div{
	width: 60%; margin: 10px auto; font-size: 18px; line-height: 2em; text-indent: 2em; text-align: left;
}
.operate{
	display: flex; flex-flow: row; width: 50%; margin: 20px auto;
}
.operate>span{
	display: flex; flex-flow: column; margin: auto; text-align: center; font-size: 15px; line-height: 2em; cursor: pointer;
}
.operate>span>i{
	margin: auto;
}
.other{
	width: 60%; display: flex; flex-flow: row; justify-content: space-between; margin: auto;
}
.other>span{
	margin: auto 0px; display: flex; flex-flow: row; font-size: 17px; line-height: 40px; cursor: pointer;
}
.other>span>i{
	font-size: 22px; line-height: 40px; margin: auto 20px;
}

.submit{
	width: fit-content;	margin: 20px 10px 20px auto;
}
.editor-div,.comment-div{
	width: 60%;	margin: 15px auto;
}
.comment-div>div{
	width: 100%; margin: 10px auto; padding: 20px 0px; border-bottom: solid 1px #dcdcdc;
}
.comment-top{
	width: 100%; display: flex; flex-flow: row;	justify-content: space-between;
}
.comment-top-left{
	margin: auto auto auto 0px;	display: flex; flex-flow: row;
}
.comment-top-right{
	margin: auto 0px auto auto;	display: flex; flex-flow: row;
}
.comment-top-left>img{
	width:35px; height:35px; border-radius: 100%; margin: auto 7px;
}
.comment-top-left>span{
	font-size: 17px; line-height: 35px; margin: auto 7px;
}
.comment-top-right>i{
	font-size: 36px;
}
.comment-top-right{
	line-height: 35px;
}
.comment-top-right>span{
	display: flex; flex-flow: row; margin-left: 20px; cursor: pointer;
}
.comment-bottom{
	width: 100%; display: flex; flex-flow: column;
}
.comment-bottom>span{
	font-size: 15px; line-height: 1.5em; text-align: left; padding-left: 50px; text-indent: 2em; display: flex; flex-flow: row;
}
.comment-bottom>span p{
	display: block; flex-flow: row;
}
.comment-bottom>span img{
	height: 20px; width: 20px; margin: auto 3px;
}
</style>