import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/main-about",  // 访问根路径时重定向到 /vue3-about
  },
  {
    path: "",
    name: "home",
    component: Home,
    children: [
      {
        path: "main-about",
        name: "main-about",
        component: () => import("../components/about/v2.vue"),
      },
      {
        path: "vue3-about",
        name: "vue3-about",
        component: () => import("../components/about/v3.vue")
      },
      {
        path: "react-about",
        name: "react-about",
        component: () => import("../components/about/rf.vue")
      },
      {
        path: "main-connect",
        name: "main-connect-1",
        component: () => import("../components/connect/v2.vue"),
      },
      {
        path: "vue3-connect",
        name: "vue3-connect-1",
        component: () => import("../components/connect/v3.vue")
      },
      {
        path: "react-connect",
        name: "react-connect-1",
        component: () => import("../components/connect/rf.vue")
      },
      {
        path: "main-skip",
        name: "main-skip-2",
        component: () => import("../components/skip/v2.vue"),
      },
      {
        path: "vue3-skip",
        name: "vue3-skip-2",
        component: () => import("../components/skip/v3.vue")
      },
      {
        path: "react-skip",
        name: "react-skip-2",
        component: () => import("../components/skip/rf.vue")
      },
      {
        path: "vue3-keepAlive",
        name: "vue3-keepAlive-3",
        component: () => import("../components/keepAlive/v3.vue")
      },
      {
        path: "react-keepAlive",
        name: "react-keepAlive-3",
        component: () => import("../components/keepAlive/rf.vue")
      },
      {
        path: "communication",
        name: "communication",
        component: () => import("../components/communication.vue")
      },
      {
        path: "isolation",
        name: "isolation",
        component: () => import("../components/isolation.vue")
      }
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
Vue.prototype.$microAppProps = { router };
export default router;
