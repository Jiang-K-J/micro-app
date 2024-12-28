<script setup>
const onClick = (e) => {
    window.history.pushState(null, null, e);
  };
</script>

<template>
 <div class="mb-4">
  <h1>vue3子应用</h1>
    <el-button @click="onClick('/')">跳转到主应用的首页</el-button>
    <el-button @click="onClick('/sub-react')" type="primary">跳转到react子应用</el-button>
    <el-button @click="onClick('/sub-vue')" type="success">跳转到vue3子应用</el-button>
 </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
