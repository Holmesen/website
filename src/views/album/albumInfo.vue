<template>
  <div style="width: 100%; height: 100%;">
    <div style="height: 100%">
      <!-- swiper1 -->
      <swiper :options="swiperOptionTop" :not-next-tick="true" class="gallery-top" ref="swiperTop">
        <swiper-slide v-for="(item, index) in album.photos" :key="'top-'+index">
          <img :src="item.url" alt="">
        </swiper-slide>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper :options="swiperOptionThumbs" :not-next-tick="true" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide v-for="(item, index) in album.photos" :key="'thumbs-'+index">
          <img :src="item.url" alt="">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {getAlbumList} from '../../apis/album.js'
  export default {
    name: 'albumInfo',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        id: '',
        swiperOptionTop: {
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionThumbs: {
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true
        },
        album: {},
        photos: []
      }
    },
    mounted() {
      if(this.$route.params.id) {
        this.id = this.$route.params.id
        getAlbumList({keyid: this.id}).then(res=> {
          if(res.data.success) {
            res.data.data[0]['photos'].forEach((el, idx) => {
              if(el.url.indexOf('cdn.pixabay.com')!==-1 && el.url.indexOf('_150')!==-1){
                res.data.data[0]['photos'][idx]['url'] = el.url.replace(/_150/g,'_960_720') // _1280; _1920;
              }
            });
            this.album = res.data.data[0]
            this.$refs.swiperTop.swiper.loopDestroy()
            this.$refs.swiperThumbs.swiper.loopDestroy()
            this.$refs.swiperTop.swiper.loopCreate()
            this.$refs.swiperThumbs.swiper.loopCreate()
          } else {
            this.$notify({ title: '获取相册', message: res.data.message || '相册获取失败', type: 'error' })
          }
        }).catch(err=> {
          console.error(err)
          this.$notify({ title: '获取相册', message: '相册获取失败', type: 'error' })
        }).finally(()=>{})
      }

      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }
  }
</script>

<style lang="scss" scoped>
.swiper-container {
  background-color: #000;
}
.swiper-slide{
  img{height: 100%;}
}
.gallery-thumbs{
  img{width: 100%;}
}
.gallery-top {
  height: 80%!important;
  width: 100%;
}
.gallery-thumbs {
  height: 20%!important;
  box-sizing: border-box;
  padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}

.el-carousel__item h3 {
  color: #475669; font-size: 14px; opacity: 0.75; line-height: 200px; margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>