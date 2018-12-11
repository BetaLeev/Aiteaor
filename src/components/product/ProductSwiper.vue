<template>
  <!-- swiper -->
  <swiper :options="swiperOption">
    <swiper-slide>
      <img src="http://static.runoob.com/images/mix/cinqueterre.jpg" alt>
    </swiper-slide>
    <swiper-slide>
      <img src="http://static.runoob.com/images/mix/cinqueterre.jpg" alt>
    </swiper-slide>
    <swiper-slide>
      <img src="http://static.runoob.com/images/mix/cinqueterre.jpg" alt>
    </swiper-slide>
    <swiper-slide>
      <img src="http://static.runoob.com/images/mix/cinqueterre.jpg" alt>
    </swiper-slide>
    <swiper-slide>
      <img src="http://static.runoob.com/images/mix/cinqueterre.jpg" alt>
    </swiper-slide>
    <swiper-slide>
      <img src="http://static.runoob.com/images/mix/cinqueterre.jpg" alt>
    </swiper-slide>
    <swiper-slide>
      <img src="http://static.runoob.com/images/mix/cinqueterre.jpg" alt>
    </swiper-slide>
    <swiper-slide>
      <img src="http://static.runoob.com/images/mix/cinqueterre.jpg" alt>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>


<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 100,
        slidesPerGroup: 4,
        loop: true,
        // autoplay: true,
        loopFillGroupWithBlank: true,
        height: "10px",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.swiper-container {
  height: 100px;
}
.swiper-container img {
  background-size: 100%;
}
</style>
