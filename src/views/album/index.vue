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
					{src:'https://images.unsplash.com/photo-1562184647-7c5c35548033?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1067&q=80',  href:'/album/albumInfo'},
					{src:'https://images.unsplash.com/photo-1563724160625-eeaf8f4f905f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',href:'/album/albumInfo'},
					{src:'https://images.unsplash.com/photo-1563724600443-ed9bf3f2437a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',href:'/album/albumInfo'},
					{src:'https://images.unsplash.com/photo-1563713665854-e72327bf780e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',href:'/album/albumInfo'},
					{src:'https://images.unsplash.com/photo-1563691189804-87116b3142f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',href:'/album/albumInfo'},
					{src:'https://images.unsplash.com/photo-1563729950602-4c24322b6b34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',href:'/album/albumInfo'},
					{src:'https://images.unsplash.com/photo-1562184647-7c5c35548033?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1067&q=80',  href:'/album/albumInfo'},
					{src:'https://images.unsplash.com/photo-1563724160625-eeaf8f4f905f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',href:'/album/albumInfo'},
					{src:'https://images.unsplash.com/photo-1563724600443-ed9bf3f2437a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',href:'/album/albumInfo'},
					{src:'https://images.unsplash.com/photo-1563713665854-e72327bf780e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',href:'/album/albumInfo'},
					{src:'https://images.unsplash.com/photo-1563691189804-87116b3142f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',href:'/album/albumInfo'},
					{src:'https://images.unsplash.com/photo-1563729950602-4c24322b6b34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',href:'/album/albumInfo'},
					{src:'https://images.unsplash.com/photo-1562184647-7c5c35548033?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1067&q=80',  href:'/album/albumInfo'},
					{src:'https://images.unsplash.com/photo-1563724160625-eeaf8f4f905f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',href:'/album/albumInfo'},
					{src:'https://images.unsplash.com/photo-1563724600443-ed9bf3f2437a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',href:'/album/albumInfo'},
					{src:'https://images.unsplash.com/photo-1563713665854-e72327bf780e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',href:'/album/albumInfo'},
					{src:'https://images.unsplash.com/photo-1563691189804-87116b3142f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',href:'/album/albumInfo'},
					{src:'https://images.unsplash.com/photo-1563729950602-4c24322b6b34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',href:'/album/albumInfo'}
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