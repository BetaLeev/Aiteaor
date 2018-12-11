<template>
  <div class="nav">
    <div class="head-nav">
      <font-awesome-icon icon="coffee" class="scan fa-2x"/>
      <input type="text">
      <font-awesome-icon icon="coffee" class="message fa-2x"/>
    </div>
    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="http://static.runoob.com/images/mix/cinqueterre.jpg" alt>
      </swiper-slide>
      <swiper-slide>
        <img src="http://static.runoob.com/images/mix/cinqueterre.jpg" alt>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
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
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        }
      }
    };
  }
};
</script>
<style lang="scss">
.nav {
  height: 210px;
}
.head-nav {
  width: 100%;
  height: 40px;
  line-height: 40px;
  // z-index: 1;
  position: fixed;
  z-index: 999;
  // background-color: beige;
}

.scan {
  float: left;
  top: 5px;
  left: 10px;
  position: relative;
}
.message {
  margin-top: 5px;
  float: right;
  right: 10px;
  position: relative;
}
.head-nav input[type="text"] {
  outline: none;
  border: none;
  padding-left: 20px;
  width: 70%;
  height: 30px;
  border-radius: 30px;
  background-color: #eeee;
}
.swiper-container {
  width: 100%;
  background-color: aquamarine;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
}
</style>


