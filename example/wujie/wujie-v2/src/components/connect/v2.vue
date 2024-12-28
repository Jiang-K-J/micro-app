<script>
import Vue from "vue";
export default {
  data() {
    return {
      disabled: true,
      desc: "我是主应用，我向自己发信息",
      listData: {
        ...this.$TempStore
      },
    };
  },
  methods: {
    sendMsg() {
      this.$wujie.bus.$emit("main-alert-msg", this.desc);
    },
    save(){
      Vue.prototype.$TempStore = this.listData
      this.disabled = true;
    }
  },
};
</script>

<template>
  <div>
    <h1>vue2主应用通信测试</h1>
    <div style="text-align: right">
      <el-button
        type="primary"
        icon="el-icon-edit"
        v-show="disabled"
        @click="disabled = false"
        >编辑</el-button
      >
      <el-button
        type="success"
        icon="el-icon-receiving"
        v-show="!disabled"
        @click="save"
        >保存</el-button
      >
    </div>
    <el-descriptions
      title="可编辑列表"
      :column="3"
      border
      style="min-width: 900px"
    >
      <el-descriptions-item label="用户名">
        <el-input
          v-model="listData.userName"
          placeholder="请输入内容"
          :disabled="disabled"
        ></el-input>
      </el-descriptions-item>
      <el-descriptions-item label="手机号">
        <el-input
          v-model="listData.phoneNumber"
          placeholder="请输入内容"
          :disabled="disabled"
        ></el-input>
      </el-descriptions-item>
      <el-descriptions-item label="居住地">
        <el-input
          v-model="listData.adder"
          placeholder="请输入内容"
          :disabled="disabled"
        ></el-input>
      </el-descriptions-item>
      <el-descriptions-item label="备注">
        <el-select
          v-model="listData.selVal"
          placeholder="请选择"
          :disabled="disabled"
        >
          <el-option label="黄金糕" value="1"> </el-option>
          <el-option label="双皮奶" value="2"> </el-option>
          <el-option label="蚵仔煎" value="3"> </el-option>
        </el-select>
      </el-descriptions-item>
      <el-descriptions-item
        label="联系地址"
        :contentStyle="{ 'text-align': 'right' }"
      >
        <el-input
          v-model="listData.place"
          placeholder="请输入内容"
          :disabled="disabled"
        ></el-input>
      </el-descriptions-item>
    </el-descriptions>
    <el-form :inline="true" min-width="600px" style="margin-top: 20px">
      <el-form-item label="编辑信息">
        <el-input
          type="textarea"
          v-model="desc"
          style="min-width: 600px"
        ></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="sendMsg">向主应用发送消息</el-button>
  </div>
</template>
