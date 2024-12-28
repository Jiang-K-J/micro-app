import React, { useEffect, useState } from "react";
import { Card, List, Button } from "antd";
import { useQiankunProps } from "../QiankunContext";

const App = () => {
  const [data, setData] = useState([]);
  const qiankunProps = useQiankunProps();

  const mount = () => {
    console.log("子应用 mount", qiankunProps);
    // 监听状态变化
    qiankunProps.actions.onGlobalStateChange((state, prev) => {
      console.log("子应用监听到状态变化", state, prev);
      setData(state.listData || []);
    });
    qiankunProps.actions.setGlobalState({
        agency:"child-react"
      })
  };

  useEffect(() => {
    mount();
  }, []); // 确保 mount 只调用一次

  return (
    <>
      <h1>我是 React 子应用</h1>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>来自主应用的信息</Card>
          </List.Item>
        )}
      />
      <Button
        type="primary"
        onClick={() =>
          qiankunProps.actions.setGlobalState({
            msg: "我是 React 子应用，我给主应用发信息",
          })
        }
      >
        向主应用发送信息
      </Button>
    </>
  );
};

export default App;
