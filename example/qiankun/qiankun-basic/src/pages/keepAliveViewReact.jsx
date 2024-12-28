import React, { useEffect, useState, useRef } from "react";
import { loadMicroApp } from "qiankun";

const CoexistMicroApp = () => {
  const [app1, setApp1] = useState(null); // Vue 子应用实例
  const app1Ref = useRef(null);

  // 加载 Vue 子应用的方法
  const mountVueApp = () => {
    const app = loadMicroApp({
      name: "sub-react",
      entry: "//localhost:3003",
      container: "#app-one",
      props: {
        path: "/sub-react/keepAliveView",
      },
    });

    app1Ref.current = app;
    setApp1(app);
  };

  useEffect(() => {
    mountVueApp(); // 加载 Vue 子应用
  }, []);

  return (
    <div id="app-one" style={{ marginTop: 20 }}></div>
  );
};

export default CoexistMicroApp;
