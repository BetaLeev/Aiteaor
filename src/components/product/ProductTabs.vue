<template>
  <div class="product-tabs">
    <h4>分类展示</h4>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="铁观音" name="first">
        <div class="row">
          <img
            class="tabs-img"
            src="https://ccdn.goodq.top/caches/d77fb68e7c449a81135cc696b98e87de/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS82NjcwOTdkZGJiMTZkYzk2MGVjZDQ2MmNiZjM3N2QyOC00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
            alt
          >
          <img
            class="tabs-img"
            src="https://ccdn.goodq.top/caches/d77fb68e7c449a81135cc696b98e87de/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS82NjcwOTdkZGJiMTZkYzk2MGVjZDQ2MmNiZjM3N2QyOC00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
            alt
          >
          <img
            class="tabs-img"
            src="https://ccdn.goodq.top/caches/d77fb68e7c449a81135cc696b98e87de/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS82NjcwOTdkZGJiMTZkYzk2MGVjZDQ2MmNiZjM3N2QyOC00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
            alt
          >
          <img
            class="tabs-img"
            src="https://ccdn.goodq.top/caches/d77fb68e7c449a81135cc696b98e87de/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS82NjcwOTdkZGJiMTZkYzk2MGVjZDQ2MmNiZjM3N2QyOC00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
            alt
          >
        </div>
      </el-tab-pane>
      <el-tab-pane label="西湖龙井" name="second">
        <div class="row">
          <img
            class="tabs-img"
            src="https://ccdn.goodq.top/caches/d77fb68e7c449a81135cc696b98e87de/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS82NjcwOTdkZGJiMTZkYzk2MGVjZDQ2MmNiZjM3N2QyOC00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
            alt
          >
          <img
            class="tabs-img"
            src="https://ccdn.goodq.top/caches/d77fb68e7c449a81135cc696b98e87de/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS82NjcwOTdkZGJiMTZkYzk2MGVjZDQ2MmNiZjM3N2QyOC00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
            alt
          >
        </div>
      </el-tab-pane>
      <el-tab-pane label="正安白茶" name="third">
        <div class="row">
          <img
            class="tabs-img"
            src="https://ccdn.goodq.top/caches/d77fb68e7c449a81135cc696b98e87de/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS82NjcwOTdkZGJiMTZkYzk2MGVjZDQ2MmNiZjM3N2QyOC00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
            alt
          >
        </div>
      </el-tab-pane>
      <el-tab-pane label="碧螺春" name="fourth">
        <div class="row">
          <img
            class="tabs-img"
            src="https://ccdn.goodq.top/caches/d77fb68e7c449a81135cc696b98e87de/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS82NjcwOTdkZGJiMTZkYzk2MGVjZDQ2MmNiZjM3N2QyOC00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
            alt
          >
          <img
            class="tabs-img"
            src="https://ccdn.goodq.top/caches/d77fb68e7c449a81135cc696b98e87de/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS82NjcwOTdkZGJiMTZkYzk2MGVjZDQ2MmNiZjM3N2QyOC00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
            alt
          >
        </div>
      </el-tab-pane>
      <el-tab-pane label="祁门红茶" name="fifth">
        <div class="row">
          <img
            class="tabs-img"
            src="https://ccdn.goodq.top/caches/d77fb68e7c449a81135cc696b98e87de/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS82NjcwOTdkZGJiMTZkYzk2MGVjZDQ2MmNiZjM3N2QyOC00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
            alt
          >
          <img
            class="tabs-img"
            src="https://ccdn.goodq.top/caches/d77fb68e7c449a81135cc696b98e87de/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS82NjcwOTdkZGJiMTZkYzk2MGVjZDQ2MmNiZjM3N2QyOC00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
            alt
          >
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "second"
    };
  },
  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event);
    }
  }
};
</script>

<style lang="scss">
.product-tabs {
  border-radius: 13px;
  padding-top: 20px;
  margin-top: 10px;
  background-color: orangered;
}
.row img {
  width: 22%;
  height: 110px;
  margin-left: 10px;
  margin-bottom: 20px;
}
</style>

