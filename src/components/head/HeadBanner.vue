<template>
  <div id="demo" class="carousel slide" data-ride="carousel">
    <!-- 指示符 -->
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
    </ul>

    <!-- 轮播图片 -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://static.runoob.com/images/mix/img_fjords_wide.jpg">
      </div>
      <div class="carousel-item">
        <img src="https://static.runoob.com/images/mix/img_nature_wide.jpg">
      </div>
      <div class="carousel-item">
        <img src="https://static.runoob.com/images/mix/img_mountains_wide.jpg">
      </div>
    </div>

    <!-- 左右切换按钮 -->
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
  </div>
</template>
<style lang="scss" scoped>
$height: 220px;
.carousel-inner img {
  height: $height;
}
</style>
