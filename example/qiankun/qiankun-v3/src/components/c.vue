<script setup>

</script>

<template>
 <div>
    <el-col>
      <h2>vue3子应用(style scope)</h2>
    </el-col>
  </div>
  <el-row>
    <el-col :span="12" class="first-col">class="first-col"<br />background-color: red;<br />font-size: 20px;</el-col>
    <el-col :span="12" class="second-col">class="second-col"<br />background-color: green;<br />font-size: 20px;</el-col>
  </el-row>
</template>

<style scoped>
.first-col {
  color: #ffffff;
  background-color: red;
  font-size: 20px;
}

.second-col {
  color: #ffffff;
  background-color: green;
  font-size: 20px;
}
</style>
