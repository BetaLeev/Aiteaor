<template>
  <div>
    <h4>分类展示</h4>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">铁观音</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">西湖龙井</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">正安白茶</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">碧螺春</el-tab-pane>
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
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss">
</style>

