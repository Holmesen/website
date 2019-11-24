<template>
  <div id="home-div">
    <!-- <div id="swiper-container">
      <div class="swiper-wrapper">
        <swiper :options="swiperOption">
          <swiper-slide class="swiper-slide">
            <img src="../../assets/images/images/denys-w.jpg" alt="">
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img src="../../assets/images/images/instagram-w.jpg" alt="">
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img src="../../assets/images/images/work0.jpg" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div> -->
    <!-- <div class="div-padding"></div>
    <div class="div-padding bg-color"></div>
    <div class="div-padding "></div> -->
    <!-- <myfooter></myfooter> -->
    <div class="home-cover"></div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import myfooter from '../../components/footer/index'
import $ from 'jquery'
  export default {
    name: 'home',
    data(){
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          effect : 'fade',
          speed:500,
          autoplay: {
            delay:3000
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    components: {
      myfooter,
      swiper,
      swiperSlide
    },
    mounted(){
    }
  }
</script>

<style scoped>
/* *{
	display: flex; flex-flow: column; align-content: center;
} */
#home-div{
  width: 100%; height: 100%;
}
#swiper-container,.swiper-wrapper,.swiper-slide{
  width: 100%; height: 100%;
}
.swiper-slide{
  display: flex;
}
.swiper-slide>img{
  width: 100%; height: auto; align-self: center;
}
.div-padding{
  width: 100%; height: auto; margin: auto; padding: 100px 0px;
}
.bg-color{
  background-color: lightgray;
}

.home-cover{
  height: 100%; width: 100%; background: url('../../assets/images/images/Holmesen-color-big.png') no-repeat center;
  background-size: cover;
}
</style>