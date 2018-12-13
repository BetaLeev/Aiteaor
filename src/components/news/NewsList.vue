<template>
  <div class="jumbotron container">
    <transition
      name="custom-classes-transition"
      enter-active-class="bounceLeft-enter"
      leave-active-class="bounceRight-leave"
    >
      <section v-if="show">
        <h3>新闻</h3>
        <article class="col-sm-*">
          <img src="https://static.runoob.com/images/mix/img_nature_wide.jpg" alt>
          <div class="news-content">
            <p class="news-title">标题</p>
            <p class="news-desc">1231231123123112312311231231123123112312311231231</p>
          </div>
        </article>
        <article class="col-sm-*">
          <img src="https://static.runoob.com/images/mix/img_nature_wide.jpg" alt>
          <div class="news-content">
            <p class="news-title">标题</p>
            <p class="news-desc">1231231123123112312311231231123123112312311231231</p>
          </div>
        </article>

        <el-pagination background layout="prev, pager, next" :total="10"></el-pagination>
      </section>
    </transition>
  </div>
</template>
<script>
require("vue2-animate/dist/vue2-animate.min.css");

export default {
  data() {
    return {
      show: true
    };
  }
};
</script>

<style lang="scss" scoped>
.jumbotron {
  // margin-top: 20px;
  border-radius: 13px;
  margin-bottom: 20px;
}

article {
  height: 90px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  // background-color: aquamarine;
  border-bottom: 1px dotted black;
}
article img {
  height: 70px;
  width: 25%;
  float: left;
}
.news-content {
  width: 70%;
  // background-color: aqua;
  padding-left: 10px;
  height: 80px;
  float: left;
}
.news-desc {
  height: 30px;
  margin-top: -18px;
  word-wrap: break-word;
  overflow: hidden;
}
// article {
//   max-width: 70%;
//   display: inline-block;
//   background: palegreen;
//   padding-left: 20px;
//   height: 70px;
//   // overflow: hidden;
//   float: left;
// }
</style>

