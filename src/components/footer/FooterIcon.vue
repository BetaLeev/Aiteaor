<template>
  <footer>
    <div class="menu">
      <router-link to="/home">
        <i class="el-icon-edit"></i>
        <span>首页</span>
      </router-link>
    </div>
    <div class="menu">
      <i class="el-icon-edit"></i>
      <span>分类</span>
    </div>
    <div class="menu">
      <i class="el-icon-edit"></i>
      <span>发现</span>
    </div>
    <div class="menu">
      <i class="el-icon-edit"></i>
      <span>购物车</span>
    </div>
    <div class="menu">
      <router-link to="/login">
        <i class="el-icon-edit"></i>
        <span>我的</span>
      </router-link>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  background-color: salmon;
  width: 100%;
  position: fixed;
  height: 60px;
  line-height: 60px;
  bottom: 0;
  z-index: 123;
}
// footer div {
//   display: flex;
//   width: 20%;
// }
.menu {
  float: left;
  width: 20%;
}
i {
  display: block;
  position: relative;
  top: 10px;
}
.menu span {
  top: -5px;
  position: relative;
  line-height: 20px;
}
</style>

