import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import router from "./router";
import "element-ui/lib/theme-chalk/index.css";
import WujieVue from "wujie-vue2";

const { bus, preloadApp } = WujieVue;
Vue.config.productionTip = false;
Vue.use(WujieVue).use(ElementUI);

Vue.prototype.$wujie = WujieVue;
const vue3Url = "http://localhost:3004/";
const reactUrl = "http://localhost:3005/";
Vue.prototype.$v3Url = vue3Url;
Vue.prototype.$rfUrl = reactUrl;
Vue.prototype.patchElementHook = function patchElementHook(
  element,
  iframeWindow
) {
  if (element.nodeName === "STYLE") {
    element.insertAdjacentElement = function (_position, ele) {
      iframeWindow.document.head.appendChild(ele);
    };
  }
};
Vue.prototype.$TempStore = {
  userName: "王小虎",
  phoneNumber: "1234567890",
  adder: "上海市普陀区金沙江路 1518 弄",
  place: "上海市普陀区金沙江路 1518 弄",
  selVal: "2",
};

new Vue({
  router,
  render: (h) => h(App),
  mounted() {
    bus.$on("main-alert-msg", (message) => {
      this.$notify({
        title: "来自主应用的提示",
        message,
        duration: 3000,
      });
    });
  },
}).$mount("#app");
const isPreload = sessionStorage.getItem("isPreload") || "";
if (isPreload.includes("true")) {
  preloadApp({
    name: "about-react",
    url: `${reactUrl}about`,
    exec: true,
  });
  preloadApp({
    name: "about-vue",
    url: `${vue3Url}about`,
    exec: true,
  });
}
