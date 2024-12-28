<script setup>
import { ref } from "vue";
const menuSel = {
  "1":"黄金糕",
  "2":"双皮奶",
  "3":"蚵仔煎"
}
const desc = ref("我是vue3子应用，我向主应用发送的消息");
const listData = ref(window.$wujie.props.store);
const sendMsg = () => {
  window.$wujie?.bus.$emit("main-alert-msg", desc);
};
</script>

<template>
  <div>
    <h1>vue3子应用通信测试</h1>
    <el-descriptions
      title="主应用信息展示"
      :column="3"
      border
    >
      <el-descriptions-item label="用户名">
        {{ listData.userName }}
      </el-descriptions-item>
      <el-descriptions-item label="手机号">
        {{ listData.phoneNumber }}
      </el-descriptions-item>
      <el-descriptions-item label="居住地">
        {{ listData.adder }}
      </el-descriptions-item>
      <el-descriptions-item label="备注">
        {{ menuSel[listData.selVal] }}
      </el-descriptions-item>
      <el-descriptions-item
        label="联系地址"
        :contentStyle="{ 'text-align': 'right' }"
      >
        {{ listData.place }}
      </el-descriptions-item>
    </el-descriptions>
    <el-form-item label="编辑消息" style="margin-top: 20px">
      <el-input type="textarea" v-model="desc"></el-input>
    </el-form-item>
    <el-button type="primary" @click="sendMsg">向主应用发送消息</el-button>
  </div>
</template>

<style scoped></style>
