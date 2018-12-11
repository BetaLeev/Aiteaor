<template>
  <div>
    <h3>内容展示</h3>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-lg-3">
          <div class="container">
            <h2>缩略图</h2>
            <p>.img-thumbnail 类用于设置图片缩略图(图片有边框):</p>
            <img
              src="http://static.runoob.com/images/mix/cinqueterre.jpg"
              class="img-thumbnail"
              alt="Cinque Terre"
            >
          </div>
        </div>

        <div class="col-sm-6 col-lg-3">
          <div class="container">
            <h2>缩略图</h2>
            <p>.img-thumbnail 类用于设置图片缩略图(图片有边框):</p>
            <img
              src="http://static.runoob.com/images/mix/cinqueterre.jpg"
              class="img-thumbnail"
              alt="Cinque Terre"
            >
          </div>
        </div>

        <div class="col-sm-6 col-lg-3">
          <div class="container">
            <h2>缩略图</h2>
            <p>.img-thumbnail 类用于设置图片缩略图(图片有边框):</p>
            <img
              src="http://static.runoob.com/images/mix/cinqueterre.jpg"
              class="img-thumbnail"
              alt="Cinque Terre"
            >
          </div>
        </div>

        <div class="col-sm-6 col-lg-3">
          <div class="container">
            <h2>缩略图</h2>
            <p>.img-thumbnail 类用于设置图片缩略图(图片有边框):</p>
            <img
              src="http://static.runoob.com/images/mix/cinqueterre.jpg"
              class="img-thumbnail"
              alt="Cinque Terre"
            >
          </div>
        </div>
      </div>
      <br>
      <input type="button" class="btn btn-info" value="查看更多">
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.big-img {
  background-color: aquamarine;
}

.img-thumbnail {
  transform: scale(1);
  transition: all 1s ease 0s;
}
.img-thumbnail:hover {
  transform: scale(1.02);
  transition: all 1s ease 0s;
}
</style>

