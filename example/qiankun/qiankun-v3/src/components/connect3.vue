<script setup>
import { inject, onMounted, ref } from "vue";
import { ElMessage } from 'element-plus'
const listData = ref([]);
const childMsg = ref("");
const input = ref('我是 vue3 子应用，我给react子应用发信息')

const qiankunProps = inject("qiankunProps");
onMounted(() => {
  // 监听状态变化
  qiankunProps.actions.onGlobalStateChange((state, prev) => {
    console.log("子应用监听到状态变化", state, prev);
    listData.value = state.listData || [];
    if(state.info){
      childMsg.value = state.info;
    }
  });
  qiankunProps.actions.setGlobalState({
    agency: "child-react",
  });
});

const handleClick = () => {
  qiankunProps.actions.setGlobalState({
    msg: input.value,
  });
};

const childrenClick = () => {
  qiankunProps.actions.setGlobalState({
    vueInfo: "我是 vue3 子应用，我给react子应用发信息",
  });
  ElMessage({
    message: '传递成功，快去子应用看看吧',
    type: 'success',
  })
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
  <br/>
  <span>编辑消息：</span>
  <el-input v-model="input" style="width: 240px" placeholder="Please input" />&nbsp;
  <el-button type="primary" @click="childrenClick">向react子应用发送信息</el-button>
    <h3>接收子应用间通信的消息：{{ childMsg || "子应用暂时为发送消息过来哦！" }}</h3>
</template>

<style scoped>
.read-the-docs {
  color: #888;
  border: 1px solid #888;
}
</style>
