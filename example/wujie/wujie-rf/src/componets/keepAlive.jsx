import React, { useState } from "react";
import { Input, Form } from "antd";
const { TextArea } = Input;
const App = () => {
  const [msg,setMsg] = useState("我是react子应用，保活测试信息");

  return (
    <>
    <h1>react子应用保活测试</h1>
      <Form.Item label="编辑消息" style={{ marginTop: 20 }}>
        <TextArea rows={4} value={msg} onChange={(e) => {setMsg(e.target.value)}}/>
      </Form.Item>
    </>
  );
};
export default App;
