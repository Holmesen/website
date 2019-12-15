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
				<vue-waterfall-easy srcKey="url" :imgsArr="albumList" @scrollReachBottom="getData"></vue-waterfall-easy>
			</div>
		</div>
		
	</div>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy"
import {getAlbumList, getPhotos} from '../../apis/album'
	export default {
		name: 'album',
		components: {
			vueWaterfallEasy
		},
		data() {
			return {
				albumList: [],
				loading: null
			}
		},
		methods: {
			getData() {
				return
			},
			openFullScreen() {
        this.loading = this.$loading({
          lock: true,
          text: 'Loading...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
      }
		},
		mounted() {
			this.openFullScreen()
			getPhotos().then(res=> {
				if(res.data.success) {
					if(res.data.data && res.data.data.length>0) {
						let list = []
						res.data.data.forEach(el => {
							el.photos.forEach(el2 => {
								list.push(Object.assign({keyid: el.keyid, ukeyid: el.ukeyid, href: '/album/albumInfo/'+el.keyid},el2))
							})
						})
						this.albumList = list.derangedArray()
					}
				} else {
					this.$notify({
						title: '获取相册',
						message: res.data.message || '相册获取失败',
						type: 'error'
					})
				}
			}).catch(err=> {
				console.error(err)
				this.$notify({
					title: '获取相册',
					message: '相册获取失败',
					type: 'error'
				})
			}).finally(()=>{this.loading.close()})
			// this.openFullScreen()
			// getAlbumList({}).then(res=> {
			// 	if(res.data.success) {
			// 		if(res.data.data && res.data.data.length>0) {
			// 			this.albumList = res.data.data
			// 		}
			// 	} else {
			// 		this.$notify({
			// 			title: '获取相册',
			// 			message: res.data.message || '相册获取失败',
			// 			type: 'error'
			// 		})
			// 	}
			// }).catch(err=> {
			// 	console.error(err)
			// 	this.$notify({
			// 		title: '获取相册',
			// 		message: '相册获取失败',
			// 		type: 'error'
			// 	})
			// }).finally(()=>{this.loading.close()})
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