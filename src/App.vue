<template>
  <div>
    <head-nav/>
    <head-banner/>
    <br>
    <log-in/>
    <br>
    <container-img/>
    <br>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <slider v-bind="setting"/>
      </div>
    </div>
    <div class="container center"></div>
  </div>
</template>

<script>
import HeadNav from "@/components/head/HeadNav";
import HeadBanner from "@/components/head/HeadBanner";
import LogIn from "@/components/login/LogIn";
import ContainerImg from "@/components/container/ContainerImg";
import slider from "vue-image-scroll";
export default {
  name: "App",
  components: { HeadNav, HeadBanner, LogIn, ContainerImg, slider },
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
        autoRoll: false
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
  padding-bottom: 100px;
}
</style>
