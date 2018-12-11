<template>
  <div>
    <head-nav/>
    <!-- <head-banner/> -->
    <ad-static/>

    <div class="container app-container">
      <menu-icon/>
      <news-letter/>
      <product-show/>
      <product-tabs/>
    </div>
    <br>
    <!-- <log-in/> -->
    <br>
    <container-img/>
    <br>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <slider v-bind="setting" class="scroll-slider"/>
      </div>
    </div>
    <div class="container center">广告
      <AdSlider/>
    </div>
    <news-list/>
    <product-swiper/>

    <br>
  </div>
</template>

<script>
import HeadNav from "@/components/head/HeadNav";
import HeadBanner from "@/components/head/HeadBanner";
import LogIn from "@/components/login/LogIn";
import ContainerImg from "@/components/container/ContainerImg";
import slider from "vue-image-scroll";
import AdSlider from "@/components/ad/AdSlider";
import NewsList from "@/components/news/NewsList";
import ProductSwiper from "@/components/product/ProductSwiper";
import AdStatic from "@/components/ad/AdStatic";
import MenuIcon from "@/components/menu/MenuIcon";
import NewsLetter from "@/components/news/NewsLetter";
import ProductShow from "@/components/product/ProductShow";
import ProductTabs from "@/components/product/ProductTabs";
export default {
  name: "App",
  components: {
    HeadNav,
    HeadBanner,
    LogIn,
    ContainerImg,
    slider,
    AdSlider,
    NewsList,
    ProductSwiper,
    AdStatic,
    MenuIcon,
    NewsLetter,
    ProductShow,
    ProductTabs
  },
  data: function() {
    return {
      setting: {
        image: [
          "http://static.runoob.com/images/mix/cinqueterre.jpg",
          "https://static.runoob.com/images/mix/img_nature_wide.jpg",
          "https://static.runoob.com/images/mix/img_mountains_wide.jpg"
        ],
        styleObject: {
          width: "250",
          height: "150"
        },
        imgStyle: {
          borderRadius: "20px"
        },
        autoRoll: true
      }
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 300px;
}
.scroll-slider {
  margin: 0 auto;
}
.jumbotron {
  margin-bottom: 2rem;
}
.app-container {
  width: 100%;
  margin: auto;
  background-color: chartreuse;
}
</style>
