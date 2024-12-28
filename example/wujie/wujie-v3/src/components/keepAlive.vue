<script setup>
import { ref } from "vue";

const desc = ref("我是vue3子应用，保活测试信息");

</script>

<template>
  <div>
    <h1>vue3子应用保活测试</h1>
    <el-form-item label="编辑消息" style="margin-top: 20px">
      <el-input type="textarea" v-model="desc"></el-input>
    </el-form-item>
  </div>
</template>

<style scoped></style>
