<template>
  <div class="login">
    <header>
      <!-- <head-nav/> -->
      <h3>登陆/注册</h3>
    </header>
    <main>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" @click="onSubmit">登陆</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </main>
    <footer>
      <footer-icon/>
    </footer>
  </div>
</template>
<script>
import FooterIcon from "@/components/footer/FooterIcon";

export default {
  components: {
    FooterIcon
  },
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  text-align: center;
}
.login {
  padding-top: 30px;
}
main {
  width: 100%;
  padding-right: 30px;
}
</style>

