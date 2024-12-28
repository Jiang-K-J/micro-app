<script>
  export default {
    methods: {
      onClick(path) {
        this.$router.push(path);
      }
    }
  };
</script>

<template>
 <div class="mb-4">
  <h1>vue2主应用跳转测试</h1>
    <el-button @click="onClick('/main-about')">跳转到主应用的首页</el-button>
    <el-button @click="onClick('/react-about')" type="primary">跳转到react子应用</el-button>
    <el-button @click="onClick('/vue3-about')" type="success">跳转到vue3子应用</el-button>
 </div>
</template>

<style scoped></style>
