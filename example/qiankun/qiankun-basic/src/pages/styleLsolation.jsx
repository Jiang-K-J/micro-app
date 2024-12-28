import React, { useEffect, useState, useRef } from "react";
import { loadMicroApp } from "qiankun";
import { Col, Row } from "antd";
import styles from "./index.module.css";
const CssIsolation = () => {
  const [app1, setApp1] = useState(null); // Vue 子应用实例
  const [app2, setApp2] = useState(null); // React 子应用实例
  const app1Ref = useRef(null);
  const app2Ref = useRef(null);

  // 加载 Vue 子应用的方法
  const mountVueApp = () => {
    const app = loadMicroApp({
      name: "sub-vue",
      entry: "//localhost:3002",
      container: "#app-one",
      props: {
        path: "/sub-vue/isolation3",
      },
    });

    app1Ref.current = app;
    setApp1(app);
  };

  // 加载 React 子应用的方法
  const mountReactApp = () => {
    const app = loadMicroApp({
      name: "sub-react",
      entry: "//localhost:3003",
      container: "#app-two",
      props: {
        path: "/sub-react/isolation2",
      },
    });

    app2Ref.current = app;
    setApp2(app);
  };

  // 检查应用状态
  const checkAppStatus = (app, callback) => {
    const checkInterval = setInterval(() => {
      if (app.getStatus() === "MOUNTED") {
        clearInterval(checkInterval);
        callback(); // 调用回调函数
      }
    }, 20); // 每100ms检查一次应用的状态
  };

  // 卸载微应用的方法
  const unmountApp = async (app, setApp) => {
    if (app && app.getStatus() === "MOUNTED") {
      await app.unmount();
      setApp(null);
    }
  };

  useEffect(() => {
    mountVueApp(); // 先加载 Vue 子应用

    // 等待 Vue 加载完成后再加载 React
    checkAppStatus(app1Ref.current, mountReactApp);

    return () => {
      unmountApp(app1Ref.current, setApp1);
      unmountApp(app2Ref.current, setApp2);
    };
  }, []);

  return (
    <div>
      <div>
        <h2>主应用(style scope)</h2>
        <Row style={{ marginBottom: 10 }}>
          <Col span={12} className={styles.firstCol}>
            class="first-col"
            <br />
            background-color: purple;
            <br />
            font-size: 30px;
          </Col>
          <Col span={12} className={styles.secondCol}>
            class="second-col"
            <br />
            background-color: gray;
            <br />
            font-size: 30px;
          </Col>
        </Row>
      </div>
      <div style={{ border: "1px solid #ccc", padding: 10 }}>
        {app1 ? (
          <button
            type="primary"
            danger="true"
            onClick={() => unmountApp(app1, setApp1)}
          >
            卸载 Vue 子应用
          </button>
        ) : (
          <button type="primary" onClick={mountVueApp}>
            加载 Vue 子应用
          </button>
        )}
        <div id="app-one" style={{ marginTop: 20 }}></div>
      </div>

      <div style={{ marginTop: 10, border: "1px solid #ccc", padding: 10 }}>
        {app2 ? (
          <button
            type="primary"
            danger="true"
            onClick={() => unmountApp(app2, setApp2)}
          >
            卸载 React 子应用
          </button>
        ) : (
          <button type="primary" onClick={mountReactApp}>
            加载 React 子应用
          </button>
        )}
        <div id="app-two" style={{ marginTop: 20 }}></div>
      </div>
    </div>
  );
};

export default CssIsolation;
