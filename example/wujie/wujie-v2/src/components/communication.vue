<script>
export default {
  data() {
    return {
      reactApp: true,
      vue3App: true,
    };
  },
  methods: {
    onClick(path) {
      this.$router.push(path);
    },
  },
};
</script>

<template>
  <div>
    <div>
      <p style="font-size: 33px; font-weight: bold">子应用共存测试</p>
    </div>
    <div style="display: flex; justify-content: space-between">
      <el-button
        @click="reactApp = true"
        type="primary"
        size="mini"
        v-if="!reactApp"
        >加载react子应用</el-button
      >
      <el-button
        @click="reactApp = false"
        type="danger"
        size="mini"
        v-if="reactApp"
        >卸载react子应用</el-button
      >
      <el-button
        @click="vue3App = true"
        type="primary"
        size="mini"
        v-if="!vue3App"
        >加载vue3子应用</el-button
      >
      <el-button
        @click="vue3App = false"
        type="danger"
        size="mini"
        v-if="vue3App"
        >卸载vue3子应用</el-button
      >
    </div>
    <div style="display: flex">
      <div style="width: 100%">
        <WujieVue
          v-if="reactApp"
          width="100%"
          height="100%"
          name="communication-react"
          :url="$rfUrl + 'connect'"
          :props="{ store: $TempStore }"
        />
      </div>
      <div
        style="border-left: 3px solid red; height: calc(100vh - 270px)"
      ></div>
      <div style="width: 100%">
        <WujieVue
          v-if="vue3App"
          width="100%"
          height="100%"
          name="communication-vue"
          :url="$v3Url + 'connect'"
          :props="{ store: $TempStore }"
          :plugins="[
            {
              patchElementHook,
            },
          ]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
