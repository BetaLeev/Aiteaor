<template>
  <div class="news-letter">
    <div class="title">NewsLetter</div>
    <div class="content">
      <swiper :options="swiperOption">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
      </swiper>
    </div>
    <div>
      <input type="button" class="btn btn-danger" value="More">
    </div>
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
        direction: "vertical",
        autoplay: {
          delay: 4000
        },
        loop: true
      }
    };
  }
};
</script>
<style lang="scss" scoped>
div .news-letter {
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 13px;
  height: 40px;
  width: 100%;
  background-color: palevioletred;
  display: flex;
}
.title {
  width: 20%;
  margin-right: 2%;
  background-color: aliceblue;
}
.content {
  width: 60%;
  background-color: aquamarine;
}
.news-letter div {
  height: 40px;
}
</style>


