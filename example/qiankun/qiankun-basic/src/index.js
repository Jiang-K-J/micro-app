import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerMicroApps, start } from "qiankun";
import actions from './globalState';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

registerMicroApps(
  [
    {
      name: "sub-react", // 子应用的名称
      entry: "//localhost:3003", // 默认会加载这个路径下的html，解析里面的js
      activeRule: "/sub-react", // 匹配的路由
      container: "#sub-app", // 加载的容器
      props: {
        actions
      },
    },
    {
      name: "sub-vue", // 子应用的名称
      entry: "//localhost:3002", // 默认会加载这个路径下的html，解析里面的js
      activeRule: "/sub-vue", // 匹配的路由
      container: "#sub-app", // 加载的容器
      props: {
        actions
      },
    }
  ],
  {
    beforeLoad: [async (app) => console.log("before load", app.name)],
    beforeMount: [async (app) => console.log("before mount", app.name)],
    afterMount: [async (app) => console.log("after mount", app.name)],
  }
); 

start()
