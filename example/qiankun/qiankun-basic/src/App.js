import "./App.css";
import React, { useState, useEffect } from "react";
import { Layout, Menu, notification } from "antd";
import { Routes, Route, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import routes from "./routes.js";
import Home from "./pages/Home.jsx";
import Skip1 from "./pages/skip1.jsx";
import Connect1 from "./pages/connect1.jsx";
import actions from "./globalState";
import Coexist from "./pages/coexist.jsx";
import Isolation from "./pages/styleLsolation.jsx";
import KeepAliveView from "./pages/keepAliveView";
import KeepAliveViewReact from "./pages/keepAliveViewReact";
import KeepAliveViewVue from "./pages/keepAliveViewVue";

const { Sider, Header, Content } = Layout;
const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
  {
    title: "Title 5",
  },
  {
    title: "Title 6",
  },
];
function App() {
  const [collapsed, setCollapsed] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [api, contextHolder] = notification.useNotification();
  const [activeRoute, setActiveRoute] = useState("/"); // 当前激活的页面

  // 主项目项目监听和修改
  actions.onGlobalStateChange((state, pre) => {
    console.log("主项目监听和修改", state, pre);
    if (state.msg) {
      openNotification(state.msg);
    }
  });
  // actions.setGlobalState(state); // 修改

  const onClick = (e) => {
    setCollapsed(e.key);
    navigate("/" + e.keyPath[0]);
    setActiveRoute("/" + e.keyPath[0]);
    console.log("当前路由变化了:", e.keyPath[0]);
  };

  useEffect(() => {
    // 在这里处理路由变化的逻辑
    setCollapsed(location.pathname.substring(1));
  }, [location]);

  useEffect(() => {
    actions.setGlobalState({ listData: data });
  }, []);

  const openNotification = (message = "tt") => {
    api.open({
      message,
      description:
        "I will never close automatically. This is a purposely very very long description that has many many characters and words.",
      duration: 0,
    });
  };

  return (
    <Layout>
      {contextHolder}
      <Sider collapsedWidth="0">
        <p class="page-logo">QIANKUN-DEMO</p>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[collapsed]}
          onClick={onClick}
          items={routes}
          defaultOpenKeys={['skip',"connect"]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content
          style={{
            margin: "24px 16px 0",
            height: "100%",
            background: "#fff",
            padding: "24px",
          }}
        >
          <div
            id="sub-app"
            style={{
              display:
                location.pathname.startsWith("/sub-react") ||
                location.pathname.startsWith("/sub-vue")
                  ? "block"
                  : "none",
            }}
          ></div>
          {!location.pathname.startsWith("/sub-react") &&
            !location.pathname.startsWith("/sub-vue") && (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skip1" element={<Skip1 />} />
                <Route path="/sub-react/skip2" element={<div />} />
                <Route path="/sub-vue/skip3" element={<div />} />
                <Route path="/sub-react" element={<div />} />
                <Route path="/sub-vue" element={<div />} />
                <Route path="/connect1" element={<Connect1 data={data} />} />
                <Route path="/sub-react/connect2" element={<div />} />
                <Route path="/sub-vue/connect3" element={<div />} />
                <Route path="/sub-vue/connect3" element={<div />} />
                <Route path="/coexist" element={<Coexist />} />
                <Route path="/cssIsolation" element={<Isolation />} />
                {/* <Route path="/keepAliveView1" element={<KeepAliveView />} />
                <Route path="/keepAliveView2" element={<KeepAliveViewReact />} />
                <Route path="/keepAliveView3" element={<KeepAliveViewVue />} /> */}
              </Routes>
            )}
                  </Content>
      </Layout>
    </Layout>
  );
}

export default App;
