<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>vue3子应用首页</h1>

  <div class="card">
    vue3子应用内容
  </div>

  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
