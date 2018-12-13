<template>
  <div>
    <head-nav/>
    <ad-static/>
    <div class="container app-container">
      <menu-icon/>
      <news-letter/>
      <product-show/>
      <product-tabs/>
      <div class="container recommend">
        <h3>产品推荐</h3>
        <slider v-bind="setting" class="scroll-slider"/>
      </div>
      <news-list/>
      <br>
    </div>
    <footer>
      <footer-icon/>
    </footer>
    <br>
  </div>
</template>

<script>
import HeadNav from "@/components/head/HeadNav";
import HeadBanner from "@/components/head/HeadBanner";
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
import FooterIcon from "@/components/footer/FooterIcon";

export default {
  name: "App",
  components: {
    HeadNav,
    HeadBanner,
    ContainerImg,
    slider,
    AdSlider,
    NewsList,
    ProductSwiper,
    AdStatic,
    MenuIcon,
    NewsLetter,
    ProductShow,
    ProductTabs,
    FooterIcon
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
          width: "290",
          height: "150"
        },
        imgStyle: {
          borderRadius: "20px"
        },
        autoRoll: true,
        interval: 4000
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
  /* padding-bottom: 30px; */
}
.scroll-slider {
  margin: 0 auto;
}
.jumbotron {
  margin-bottom: 2rem;
}
.app-container {
  padding-top: 10px;
  width: 100%;
  margin: auto;
  background-color: chartreuse;
}
.recommend {
  padding: 20px;
}
</style>
