import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";
import A from "./components/skip3.vue";
import B from "./components/connect3.vue";
import C from "./components/c.vue";
import Hello from "./components/HelloWorld.vue";
import KeepAliveView from "./components/keepAliveView.vue";
const routes = [
  {
    path: "/sub-vue",
    children: [
      {
        path: "",
        component: Hello,
      },
      {
        path: "skip3",
        component: A,
      },
      {
        path: "connect3",
        component: B,
      },
      {
        path: "isolation3",
        component: C,
      },
      {
        path: "keepAliveView",
        component: KeepAliveView,
      },
    ],
  },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
export const abstractRouter = createRouter({
  history: createMemoryHistory(),
  routes,
});
