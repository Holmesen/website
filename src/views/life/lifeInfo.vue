<template>
	<div id='id'>
		<div class="title"><h1>XXX生活纪事</h1></div>
		<div class="author">
			<!-- <span>作者：Holmesen</span>
			<span>日期：2019/07/10</span>
			<span>地点：福建省厦门市思明区</span> -->
			<span><img src="../../assets/images/avatar.jpg" alt="" style="width: 30px;height: 30px;border-radius: 17px;margin:7px;"> Holmesen</span>
			<span><i class="el-icon-date"></i> 2019/07/10</span>
			<span><i class="el-icon-location-information"></i> 福建省厦门市思明区</span>
		</div>
		<div class="picture">
			<img src="../../assets/images/images/bg1.jpg" alt="">
		</div>
		<div class="content">
			<p>
				据国外媒体报道，当地时间 7 月 9 日，摩纳哥成为全球第一个实现5G全国覆盖的国家，这源于该国运营商摩纳哥电信与华为的深入合作。
				摩纳哥公国位于法国南部，是个典型的微型国家，国土面积仅仅 2 平方公里，但拥有近 4 万人口，是世界上人口最稠密的国家之一，同时也是世界上人均收入最高的国家之一。 
				2018 年 9 月，阿尔贝二世亲王访华期间，摩纳哥电信与华为达成合作，计划让摩纳哥成为欧洲第一个5G全覆盖的国家，结果在全球也做到了第一。
				外媒援引华为副董事长郭平的话称，尽管华为在摩纳哥的业务范围很小，但是5G在摩纳哥的全覆盖是一个重大发展机遇，使得华为打开了一扇窗，可以作为其他国家和运营商的榜样。
				在摩纳哥电信官网上，已经开始推广华为Mate 20 X 5G、小米MIX 3 5G两款新手机。 
			</p>
		</div>
		<!-- 评论 -->
		<div class="editor-div">
			<el-divider content-position="left" style="font-size:16px;font-weight:bold;">发表评论</el-divider>
			<div ref="editor" style="text-align:left"></div>
			<div class="submit"><el-button type="primary" round>发表评论</el-button></div>
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
						<span>
							<i class="iconfont iconappreciate" style="font-size:18px;margin-right:5px;"></i>
							999
						</span>
						<span>
							<i class="iconfont iconoppose_light" style="font-size:18px;margin-right:5px;"></i>
							666
						</span>
					</div>
				</div>
				<div class="comment-bottom">
					<span style="display:block;">
						外媒援引华为副董事长郭平的话称，尽管华为在摩纳哥的业务范围很小，但是5G在摩纳哥的全覆盖是一个重大发展机遇，使得华为打开了一扇窗，可以作为其他国家和运营商的榜样。 在摩纳哥电信官网上，已经开始推广华为Mate 20 X 5G、小米MIX 3 5G两款新手机。
						<img src="http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png" alt="[坏笑]" data-w-e="1">哈哈
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import E from 'wangeditor'
	export default {
		name: 'lifeInfo',
		data() {
			return {
				editorContent: ''
			}
		},
		mounted() {
			var editor = new E(this.$refs.editor)
			editor.customConfig.onchange = (html) => {
				this.editorContent = html
			}
			editor.create()
		}
	}
</script>

<style scoped>
/* *{
	display: flex; flex-flow: column; align-content: center;
} */
#id{
	width: 100%; padding: 50px 0;
}
.title{
	margin: auto;	width: 50%;
}
.author{
	display: flex; flex-flow: row;	width: 50%;	margin: 15px auto;
}
.author>span{
	margin: auto;	font-size: 15px;	line-height: 46.4px; display: flex; flex-flow: row;
}
.author>span>i{
	font-size: 20px;  margin: auto 7px;
}
.picture,.editor-div,.comment-div{
	width: 50%;	margin: 15px auto;
}
.picture>img{
	width: 100%;	height: auto;
}
.content{
	font-size: 17px; line-height: 2em;	width: 50%;  margin: auto;	text-align: left;	text-indent: 2em;
}
.submit{
	width: fit-content;	margin: 20px 10px 20px auto;
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
	font-size: 15px; line-height: 1.5em; text-align: left; padding-left: 50px; text-indent: 2em;
}
</style>