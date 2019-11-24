<template>
  <div style="width: 100%; height: 100%;">
    <div style="display:flex;flex-flow:column;" class="swiper-inner">

      <!-- 3D方块效果,3D滚动切换 -->
      <div style="width:70%;margin:auto;">
        <swiper :options="swiperOption">
          <swiper-slide class="swiper-slide">
            <img src="../../assets/images/images/denys-w.jpg" alt="" style="width:100%; height:100%;">
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img src="../../assets/images/images/instagram-w.jpg" alt="" style="width:100%; height:100%;">
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img src="../../assets/images/images/work0.jpg" alt="" style="width:100%; height:100%;">
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img src="../../assets/images/images/tim-w.jpg" alt="" style="width:100%; height:100%;">
          </swiper-slide>
        </swiper>
      </div>
      <div class="bottom-shadows"></div>

    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'albumInfo',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          loop: true,
          speed:1500,
          autoplay: {
            delay:3000,
            disableOnInteraction: false,
            waitForTransition: false
          },
          // 3D方块效果
          // effect: 'cube',
          // grabCursor: true,
          // cubeEffect: {
          //   shadow: true,
          //   slideShadows: true,
          //   shadowOffset: 20,
          //   shadowScale: 0.94
          // }

          // 3D滚动切换
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          }
        }
      }
    }
  }
</script>

<style scoped>
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
.swiper-inner {
  width: 100%;  height: 100%;  display: flex; align-content: center;
}
.swiper-slide {
  background-position: center;  background-size: cover;  width: 300px;  height: 300px;
}

.bottom-shadows{
  width: 45%; height: 30px; border-radius: 100%; -webkit-box-shadow: 0px -20px 2px 2px #aaaaaa; 
  box-shadow: 0px -20px 20px -7px #dddddd; background-color: rgba(255, 255, 255, 0); margin: 0px auto auto auto;
}
</style>