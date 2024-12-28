<script></script>

<template>
  <div style="text-align: left;">
    <div style="text-align: center;">
      <p style="font-size: 33px; font-weight: bold">样式隔离测试</p>
    </div>
    <el-col>
      <h2>主应用</h2>
    </el-col>
    <el-row>
      <el-col :span="12" class="first-col"
        >class="first-col"<br />background-color: purple;<br />font-size:
        20px;</el-col
      >
      <el-col :span="12" class="second-col"
        >class="second-col"<br />background-color: grey;<br />font-size:
        20px;</el-col
      >
    </el-row>
    <WujieVue
      width="100%"
      height="100%"
      name="isolation-react"
      :url="$rfUrl + 'isolation'"
    />
    <WujieVue
      width="100%"
      height="100%"
      name="isolation-vue"
      :url="$v3Url + 'isolation'"
      :plugins="[
        {
          patchElementHook,
        },
      ]"
    />
  </div>
</template>

<style scoped>
.first-col {
  color: #ffffff;
  background-color: purple;
  font-size: 20px;
}

.second-col {
  color: #ffffff;
  background-color: grey;
  font-size: 20px;
}
</style>
