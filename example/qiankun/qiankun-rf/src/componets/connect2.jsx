import React, { useEffect, useState } from "react";
import { Card, List, Button } from "antd";
import { useQiankunProps } from "../QiankunContext";
import { Input, message } from 'antd';

const App = () => {
  const [data, setData] = useState([]);
  const [childMsg, setChildMsg] = useState("");
  const qiankunProps = useQiankunProps();
  const [inputValue, setInputValue] = useState("我是 React 子应用，我给vue3子应用发信息");

  const mount = () => {
    console.log("子应用 mount", qiankunProps);
    // 监听状态变化
    qiankunProps.actions.onGlobalStateChange((state, prev) => {
      console.log("子应用监听到状态变化", state, prev);
      setData(state.listData || []);
      if(state.vueInfo){
        setChildMsg(state.vueInfo)
      }
    });
    qiankunProps.actions.setGlobalState({
        agency:"child-react"
      })
  };

  const handleClick = () => {
    // 设置全局状态
    qiankunProps.actions.setGlobalState({
      info: inputValue,
    });

    // 显示提示信息
    message.success('发送成功，快去vue3子应用看看吧');
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
      <div style={{display:"flex",marginTop:"10px"}}>
      <span style={{minWidth:"70px"}}>编辑消息：</span>
      <Input placeholder="Basic usage" value={inputValue} onChange={(event) =>
          setInputValue(event.target.value)
        } />
      <Button
        type="primary"
        style={{marginLeft:"10px"}}
        onClick={handleClick}
      >
        向vue3子应用通信
      </Button>
      </div>
      <h3>接收子应用间通信的消息：{ childMsg || "子应用暂时为发送消息过来哦！" }</h3>
    </>
  );
};

export default App;
