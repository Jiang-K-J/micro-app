<template>
  <el-container id="sub-main-app">
    <el-header style="position: relative"
      >WUJIE-DEMO
      <span style="position: absolute; right: 20px">
        <el-tooltip
          class="item"
          effect="dark"
          content="本演示案例中，预加载只对/vue3-about和/react-about两个路由生效"
          placement="top-start"
        >
          <i
            class="el-icon-question"
            style="margin-right: 4px; cursor: pointer"
          ></i>
        </el-tooltip>
        <el-switch
          v-model="switchVal"
          active-color="#13ce66"
          active-value="true"
          inactive-value="false"
          :active-text="switchText"
          @change="change"
        >
        </el-switch> </span
    ></el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="menuIndex"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :default-openeds="openeds"
          @select="handleMenuSelect"
        >
          <el-menu-item index="/main-about">
            <i class="el-icon-menu"></i>
            <span slot="title">主应用</span>
          </el-menu-item>
          <el-menu-item index="/vue3-about">
            <i class="el-icon-menu"></i>
            <span slot="title">vue3子应用</span>
          </el-menu-item>
          <el-menu-item index="/react-about">
            <i class="el-icon-menu"></i>
            <span slot="title">react子应用</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-phone-outline"></i>
              <span>通信测试</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/main-connect">主应用</el-menu-item>
              <el-menu-item index="/vue3-connect">Vue3子应用</el-menu-item>
              <el-menu-item index="/react-connect">react子应用</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>跳转测试</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/main-skip">主应用</el-menu-item>
              <el-menu-item index="/vue3-skip">Vue3子应用</el-menu-item>
              <el-menu-item index="/react-skip">react子应用</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-ship"></i>
              <span>子应用保活</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/vue3-keepAlive">Vue3子应用</el-menu-item>
              <el-menu-item index="/react-keepAlive">react子应用</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/communication">
            <i class="el-icon-menu"></i>
            <span slot="title">应用共存</span>
          </el-menu-item>
          <el-menu-item index="/isolation">
            <i class="el-icon-setting"></i>
            <span slot="title">样式隔离</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menuIndex: sessionStorage.getItem("menuIndex") || "/main-about",
      openeds: [],
      switchVal: sessionStorage.getItem("isPreload") || "false",
    };
  },
  watch: {
    $route: {
      handler(to) {
        this.menuIndex = to.path;
        sessionStorage.setItem("menuIndex", to.path);
      },
      immediate: true, // 页面加载时立即触发
    },
  },
  computed: {
    switchText() {
      return this.switchVal === "true" ? "关闭预加载" : "开启预加载";
    },
  },
  methods: {
    handleMenuSelect(index) {
      //防止重复跳转
      if (this.$route.path !== index) {
        this.$router.push(index);
      }
    },
    change(e) {
      sessionStorage.setItem("isPreload", e);
      setTimeout(() => {
        window.location.reload(true);
      }, 500);
    },
  },
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: rgb(84, 92, 100);
  text-align: left;
  line-height: 60px;
  color: #fff;
  font-size: large;
  font-weight: 700;
  padding-left: 50px;
}

.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
  height: calc(100vh - 77px);
  background-color: rgb(84, 92, 100);
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: calc(100vh - 77px);
}

.el-menu {
  border-right: none;
}
#sub-main-app /deep/ .el-submenu__title i {
  color: white;
}
.el-aside::-webkit-scrollbar {
  display: none; /* 隐藏滚动条 */
}
</style>
