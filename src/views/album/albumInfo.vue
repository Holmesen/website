<template>
  <div style="width: 100%; height: 100%;">
    <!-- <div style="display:flex;flex-flow:column;" class="swiper-inner">
      3D方块效果,3D滚动切换
      <div style="width:70%;margin:auto;">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in album.photos" :key="index" class="swiper-slide">
            <img :src="item.url || '../../../static/images/noImage.jpg'" alt="" style="width:100%; height:100%;">
          </swiper-slide>
        </swiper>
      </div>
      <div class="bottom-shadows"></div>
    </div> -->
    <!-- <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel> -->
    <!-- Swiper -->
    <div style="height: 100%">
      <!-- swiper1 -->
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide v-for="(item, index) in photos" :key="'top-'+index">
          <img :src="item.url" alt="">
        </swiper-slide>
        <!-- <swiper-slide class="slide-2">
          <img src="/static/images/1576076280899.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="slide-3">
          <img src="/static/images/1576076280917.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="slide-4">
          <img src="/static/images/1576076280922.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="slide-5">
          <img src="/static/images/1576076280923.jpg" alt="">
        </swiper-slide> -->
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide v-for="(item, index) in photos" :key="'thumbs-'+index">
          <img :src="item.url" alt="">
        </swiper-slide>
        <!-- <swiper-slide class="slide-2">
          <img src="/static/images/1576076280899.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="slide-3">
          <img src="/static/images/1576076280917.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="slide-4">
          <img src="/static/images/1576076280922.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="slide-5">
          <img src="/static/images/1576076280923.jpg" alt="">
        </swiper-slide> -->
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
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionThumbs: {
          spaceBetween: 10,
          slidesPerView: 4,
          touchRatio: 0.2,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          slideToClickedSlide: true,
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
            this.album = res.data.data[0]
            this.photos = res.data.data[0].photos
            // res.data.data[0].photos.forEach(item => {
            //   this.photos.push(item)
            // })
            this.$refs.swiperTop.swiper.update()
            this.$refs.swiperThumbs.swiper.update()
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
// .swiper-slide {
//   background-size: cover;
//   background-position: center;
//   &.slide-1 {
//     background-image:url('/static/images/1575990535993.jpg');
//   }
//   &.slide-2 {
//     background-image:url('/static/images/1576076280899.jpg');
//   }
//   &.slide-3 {
//     background-image:url('/static/images/1576076280917.jpg');
//   }
//   &.slide-4 {
//     background-image:url('/static/images/1576076280922.jpg');
//   }
//   &.slide-5 {
//     background-image:url('/static/images/1576076280923.jpg');
//   }
// }
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
/* 3D方块效果 */
/* .swiper-inner {
  position: relative;  overflow: hidden;  height: 500px;  padding: 15px;  display: flex;  align-content: center;
}
.swiper-container {
  width: 500px!important;  height: 350px;  margin: auto;
}
.swiper-slide {
  background-position: center;  background-size: cover;
} */

/* 3D滚动切换 */
/* .swiper-inner {
  width: 100%;  height: 100%;  display: flex; align-content: center;
}
.swiper-slide {
  background-position: center;  background-size: cover;  width: 300px;  height: 300px;
}
.bottom-shadows{
  width: 45%; height: 30px; border-radius: 100%; -webkit-box-shadow: 0px -20px 2px 2px #aaaaaa; 
  box-shadow: 0px -20px 20px -7px #dddddd; background-color: rgba(255, 255, 255, 0); margin: 0px auto auto auto;
} */

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