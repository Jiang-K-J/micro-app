<script setup>
import { inject, onMounted, ref } from "vue";
const listData = ref([]);

const qiankunProps = inject("qiankunProps");
onMounted(() => {
  // 监听状态变化
  console.log("子应用监听到状态变化2345", qiankunProps);
  qiankunProps.actions.onGlobalStateChange((state, prev) => {
    console.log("子应用监听到状态变化", state, prev);
    listData.value = state.listData || [];
  });
  qiankunProps.actions.setGlobalState({
    agency: "child-react",
  });
});

const handleClick = () => {
  qiankunProps.actions.setGlobalState({
    msg: "我是 vue3 子应用，我给主应用发信息",
  });
};
</script>

<template>
  <div style="display: flex; justify-content: space-between; flex-wrap: wrap">
    <div class="read-the-docs" v-for="(item, index) in listData">
      {{ item.title }}<br />
      来自主应用的信息
    </div>

    <el-button type="primary" @click="handleClick">向主应用发送信息</el-button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
  border: 1px solid #888;
}
</style>
