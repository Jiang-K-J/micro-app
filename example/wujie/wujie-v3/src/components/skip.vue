<script setup>
const onClick = (e) => {
  if (window.$wujie) {
      const router = window.$wujie.props.router;
      router?.push(e);
    }
  };
</script>

<template>
 <div class="mb-4">
  <h1>vue3子应用跳转测试</h1>
    <el-button @click="onClick('/main-about')">跳转到主应用的首页</el-button>
    <el-button @click="onClick('/react-about')" type="primary">跳转到react子应用</el-button>
    <el-button @click="onClick('/vue3-about')" type="success">跳转到vue3子应用</el-button>
 </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
