<template>
  <!-- swiper -->
  <swiper :options="swiperOption">
    <swiper-slide>
      <div class="row">
        <div>
          <font-awesome-icon icon="coffee" class="message fa-2x"/>
          <p>Coffee</p>
        </div>
        <div>
          <font-awesome-icon icon="coffee" class="message fa-2x"/>
          <p>Coffee</p>
        </div>
        <div>
          <font-awesome-icon icon="coffee" class="message fa-2x"/>
        </div>
        <div>
          <font-awesome-icon icon="coffee" class="message fa-2x"/>
        </div>
      </div>
      <div class="row">
        <div>
          <font-awesome-icon icon="coffee" class="message fa-2x"/>
        </div>
        <div>
          <font-awesome-icon icon="coffee" class="message fa-2x"/>
        </div>
        <div>
          <font-awesome-icon icon="coffee" class="message fa-2x"/>
        </div>
        <div>
          <font-awesome-icon icon="coffee" class="message fa-2x"/>
        </div>
      </div>
    </swiper-slide>
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
        // slidesPerView: 4,
        spaceBetween: 100,
        // slidesPerGroup: 4,
        // loop: true,
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
  height: 170px;
  width: 100%;
  padding-top: 5px;
  margin-top: 10px;
  margin: auto;
  background-color: red;
  border-radius: 13px;
  overflow: hidden;
}
.row div {
  width: 25%;
  height: 80px;
  padding: 10px;
  border: 1px solid gold;
}

p {
  text-align: center;
}
</style>

