
const routes = [
  {
    key: "",
    label: "主应用首页",
  },
  {
    path: "/sub-react",
    key: "sub-react",
    label: "react子应用",
  },
  {
    path: "/sub-vue",
    key: "sub-vue",
    label: "vue子应用",
  },
  {
    key: "skip",
    label: "跳转测试",
    children: [
      {
        key: "skip1",
        label: "react主应用",
      },
      {
        key: "sub-react/skip2",
        label: "react子应用",
      },
      {
        key: "sub-vue/skip3",
        label: "vue3子应用",
      },
    ],
  },
  {
    key: "connect",
    label: "通信测试",
    children: [
      {
        key: "connect1",
        label: "react主应用",
      },
      {
        key: "sub-react/connect2",
        label: "react子应用",
      },
      {
        key: "sub-vue/connect3",
        label: "vue3子应用",
      },
    ],
  },
  // {
  //   key: "keepAliveView",
  //   label: "应用保活",
  //   children: [
  //     {
  //       key: "keepAliveView1",
  //       label: "react主应用",
  //     },
  //     {
  //       key: "keepAliveView2",
  //       label: "react子应用",
  //     },
  //     {
  //       key: "keepAliveView3",
  //       label: "vue3子应用",
  //     },
  //   ],
  // },
  {
    key: "coexist",
    label: "应用共存"
  },
  {
    key: "cssIsolation",
    label: "样式隔离"
  },
];

export default routes;
