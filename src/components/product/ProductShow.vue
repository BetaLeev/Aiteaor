<template>
  <div class="product">
    <h3>茗茶器具</h3>
    <div class="product-container">
      <div class="row">
        <div>
          <img
            src="https://ccdn.goodq.top/caches/d77fb68e7c449a81135cc696b98e87de/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS82NjcwOTdkZGJiMTZkYzk2MGVjZDQ2MmNiZjM3N2QyOC00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
            alt
          >
        </div>
        <div>
          <img
            src="https://ccdn.goodq.top/caches/d77fb68e7c449a81135cc696b98e87de/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS82NjcwOTdkZGJiMTZkYzk2MGVjZDQ2MmNiZjM3N2QyOC00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
            alt
          >
        </div>
      </div>
      <div class="row">
        <div>
          <img
            src="https://ccdn.goodq.top/caches/d77fb68e7c449a81135cc696b98e87de/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS82NjcwOTdkZGJiMTZkYzk2MGVjZDQ2MmNiZjM3N2QyOC00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
            alt
          >
        </div>
        <div>
          <img
            src="https://ccdn.goodq.top/caches/d77fb68e7c449a81135cc696b98e87de/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS82NjcwOTdkZGJiMTZkYzk2MGVjZDQ2MmNiZjM3N2QyOC00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
            alt
          >
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
.product {
  border-radius: 13px;
  padding-top: 20px;
  margin-top: 10px;
  height: 400px;
  width: 100%;
  background-color: chocolate;
}
.row {
  height: 50%;
}
.row div {
  display: flex;
  width: 50%;
  height: 130px;
  background-color: aqua;
  border: 3px solid chocolate;
}
.row div img {
  clear: both;
  width: 100%;
  position: relative;
  left: -10px;
  height: 100%;
}
</style>


