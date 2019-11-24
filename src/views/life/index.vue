<template>
	<div>
		<div class="top">
			<div class="title">
				<span class="title1">生活记事</span>
				<span class="title2"><i>记录点滴生活~</i></span>
			</div>
		</div>
		<div class="category">
			<div class="category-div">
				<el-select v-model="category" placeholder="默认">
					<el-option v-for="item in options" :key="item.tag" :label="item.label" :value="item.tag"></el-option>
				</el-select>
			</div>
			<div class="category-tag">
				<div v-for="item in tags" :key="item.tag" :value="item.tag">
					<el-tag :type="item.type">{{item.label}}</el-tag>
				</div>
			</div>
		</div>
		<div class="chronicles">
			<div class="chronicle-div" v-for="(item,index) in [1,2,3,4,5,6,7,8,9]" :key="index">
				<figure class="imghvr-flip-vert">
					<img src="../../assets/images/images/instagram-w.jpg">
					<figcaption>
						<div class="back-div">
							<span class="back-title">某某生活纪事</span>
							<span class="back-date">
								<i class="el-icon-date"></i>2019/07/25
							</span>
							<span class="back-intro">
								于千万人之中遇见你所要遇见的人，于千万年之中，时间的无涯的荒野里，没有早一步，也没有晚一步，
								刚巧赶上了，那也没有别的话可说，惟有轻轻地问一声：“噢，你也在这里吗？”
							</span>
						</div>
					</figcaption>
					<router-link to='/life/lifeInfo'></router-link>
				</figure>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'life',
		data() {
			return {
				options: [
					{label: '按时间分类', tag: 'date'},
					{label: '按地点分类', tag: 'place'},
					{label: '按类型分类', tag: 'category'}
				],
				tags: [
					{label: '全部', tag: 'all', type: ''},
					{label: '2018年12月', tag: '2018/12', type: 'info'},
					{label: '2019年5月', tag: '2019/05', type: 'info'},
					{label: '2019年6月', tag: '2019/06', type: 'info'},
					{label: '2019年7月', tag: '2019/07', type: 'info'}
				],
				category: ''
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
	background-size: 100%;
}
.title{
	width: fit-content; height: auto; margin: auto 200px auto auto; color: white;
}
.title1{
	font-size: 40px; font-weight: bold; line-height: 2em; margin: auto 160px 30px auto; letter-spacing: 25px;
	font-family: cursive;
}
.title2{
	font-size: 20px; line-height: 2em; margin: auto 0px auto auto; letter-spacing: 25px; font-family: cursive;
}
.chronicles{
	height: auto; width: 75%;	flex-flow: row;	flex-wrap: wrap;	margin: 20px auto;
}
.chronicle-div{
	width: 30%;	height: auto;	margin: 20px auto;
}
.category{
	flex-flow: row; justify-content: space-between; margin: 30px auto 0px auto;
	padding-bottom: 20px; border-bottom: solid 1px #dcdcdc; width: 75%;
}
.category-div{
	height: auto; margin: auto auto auto 25px;
}
.category-tag{
	width: auto; height: auto; margin: auto 25px auto auto;flex-flow: row;
}
.category-tag>div{
	width: fit-content; height: auto; margin: auto 7px; cursor: pointer;
}
.back-div{
	width: 80%; height: 90%; margin: auto;
}
.back-title{
	font-size: 16px; line-height: 30px; width: 100%; height: 30px;
}
.back-date{
	font-size: 15px; line-height: 30px; width: fit-content; height: 30px; margin: 10px auto; flex-flow: row;
}
.back-date>i{
	height: 16px; width: 16px; margin: auto 13px auto auto;
}
.back-intro{
	font-size: 16px; line-height: 35px; height: calc(100% - 80px); width: 100%; margin: auto; text-indent: 2em;
	display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;
	overflow: hidden; text-overflow: ellipsis; word-break: break-all;
}
</style>