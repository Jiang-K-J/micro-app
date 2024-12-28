import React, { useEffect, useState, useRef } from "react";
import { loadMicroApp } from "qiankun";

const CoexistMicroApp = ({ activeKey }) => {
  const [app1, setApp1] = useState(null); // Vue 子应用实例
  const app1Ref = useRef(null);

  // 加载 Vue 子应用的方法
  const mountVueApp = () => {
    const app = loadMicroApp({
      name: "sub-vue",
      entry: "//localhost:3002",
      container: "#app-one",
      props: {
        path: "/sub-vue/keepAliveView",
      },
    });

    app1Ref.current = app;
    setApp1(app);
  };

  useEffect(() => {
    console.log("keepAliveViewVue.jsx",activeKey);
    if (activeKey.includes("keepAliveView")) {
      mountVueApp(); // 加载 Vue 子应用
    }
  }, [activeKey]);

  return <div id="app-one" style={{ marginTop: 20 }}></div>;
};

export default CoexistMicroApp;
