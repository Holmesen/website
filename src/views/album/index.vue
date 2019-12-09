<template>
	<div style="height:auto;width:100%;">
		<div style="width:100%;height:auto;">
			<div class="top">
				<div class="title">
					<span class="title1">时光相册</span>
					<span class="title2"><i>留住这一刻</i></span>
				</div>
			</div>
			<div style="height:calc(100vh - 90px);">
				<vue-waterfall-easy :imgsArr="imgsarr" @scrollReachBottom="getData"></vue-waterfall-easy>
			</div>
		</div>
		
	</div>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy"
	export default {
		name: 'album',
		components: {
			vueWaterfallEasy
		},
		data() {
			return {
				imgsarr: [
					// {src:'../../assets/images/images/alexander-h.jpg',href:''},
					// {src:'../../assets/images/images/denys-w.jpg',href:''},
					// {src:'../../assets/images/images/instagram-w.jpg',href:''},
					// {src:'../../assets/images/images/pascal-h.jpg',href:''},
					// {src:'../../assets/images/images/tim-w.jpg',href:''},
					// {src:'../../assets/images/images/wes-h.jpg',href:''}
					{src:'https://a.desktopprassets.com/wallpapers/f2ba99d0442325609807e15a159e035e7dd75311/preview_8ki6dieadqq31.jpg',  href:'/album/albumInfo'},
					{src:'https://a.desktopprassets.com/wallpapers/dc614e15264e081775d0d9182636f57d05b2c6f0/preview_gj09mjkltk141.jpg',href:'/album/albumInfo'},
					{src:'https://a.desktopprassets.com/wallpapers/a6b7cf6cf1f9a22f8f29d0c8a485838dbf9768bc/preview_xngkns10y1141.jpg',href:'/album/albumInfo'},
					{src:'https://a.desktopprassets.com/wallpapers/b17f5222fd82d95194706d07813330efb64b6faf/preview_TTU8BQ4YpnCnqFCRrv01-EG6XuJ-nUMmSZxgJWEkw2g.jpg',href:'/album/albumInfo'},
					{src:'https://a.desktopprassets.com/wallpapers/e705c7dbbe92b37ed9b3b5e9d6c11dbd5f1f0393/preview_7l9qazf6qou31.jpg',href:'/album/albumInfo'},
					{src:'https://a.desktopprassets.com/wallpapers/7e43e5e78ce1e3d679a15b85c6e8c95673ef8f5c/preview_ely276idt7s31.jpg',href:'/album/albumInfo'},
					{src:'https://a.desktopprassets.com/wallpapers/f2ba99d0442325609807e15a159e035e7dd75311/preview_8ki6dieadqq31.jpg',  href:'/album/albumInfo'},
					{src:'https://a.desktopprassets.com/wallpapers/dc614e15264e081775d0d9182636f57d05b2c6f0/preview_gj09mjkltk141.jpg',href:'/album/albumInfo'},
					{src:'https://a.desktopprassets.com/wallpapers/a6b7cf6cf1f9a22f8f29d0c8a485838dbf9768bc/preview_xngkns10y1141.jpg',href:'/album/albumInfo'},
					{src:'https://a.desktopprassets.com/wallpapers/b17f5222fd82d95194706d07813330efb64b6faf/preview_TTU8BQ4YpnCnqFCRrv01-EG6XuJ-nUMmSZxgJWEkw2g.jpg',href:'/album/albumInfo'},
					{src:'https://a.desktopprassets.com/wallpapers/e705c7dbbe92b37ed9b3b5e9d6c11dbd5f1f0393/preview_7l9qazf6qou31.jpg',href:'/album/albumInfo'},
					{src:'https://a.desktopprassets.com/wallpapers/7e43e5e78ce1e3d679a15b85c6e8c95673ef8f5c/preview_ely276idt7s31.jpg',href:'/album/albumInfo'},
					{src:'https://a.desktopprassets.com/wallpapers/f2ba99d0442325609807e15a159e035e7dd75311/preview_8ki6dieadqq31.jpg',  href:'/album/albumInfo'},
					{src:'https://a.desktopprassets.com/wallpapers/dc614e15264e081775d0d9182636f57d05b2c6f0/preview_gj09mjkltk141.jpg',href:'/album/albumInfo'},
					{src:'https://a.desktopprassets.com/wallpapers/a6b7cf6cf1f9a22f8f29d0c8a485838dbf9768bc/preview_xngkns10y1141.jpg',href:'/album/albumInfo'},
					{src:'https://a.desktopprassets.com/wallpapers/b17f5222fd82d95194706d07813330efb64b6faf/preview_TTU8BQ4YpnCnqFCRrv01-EG6XuJ-nUMmSZxgJWEkw2g.jpg',href:'/album/albumInfo'},
					{src:'https://a.desktopprassets.com/wallpapers/e705c7dbbe92b37ed9b3b5e9d6c11dbd5f1f0393/preview_7l9qazf6qou31.jpg',href:'/album/albumInfo'},
					{src:'https://a.desktopprassets.com/wallpapers/7e43e5e78ce1e3d679a15b85c6e8c95673ef8f5c/preview_ely276idt7s31.jpg',href:'/album/albumInfo'}
				]
			}
		},
		methods: {
			getData() {
				return
			},
		},
		mounted() {
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
</style>