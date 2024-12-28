import React, { useState } from "react";
import { Descriptions, Button, Input, Form } from "antd";
const { TextArea } = Input;

const menuSel = {
  1: "黄金糕",
  2: "双皮奶",
  3: "蚵仔煎",
};
const App = () => {
  const { userName, phoneNumber, adder, place, selVal } =
    window.$wujie.props.store;
  const [msg, setMsg] = useState("我是react子应用，我向主应用发送消息");
  const [descLsit] = useState([
    {
      key: "1",
      label: "用户名",
      children: userName,
    },
    {
      key: "2",
      label: "手机号",
      children: phoneNumber,
    },
    {
      key: "3",
      label: "居住地",
      children: adder,
    },
    {
      key: "4",
      label: "备注",
      children: menuSel[selVal],
    },
    {
      key: "5",
      label: "联系地址",
      span: 2,
      children: place,
    },
  ]);
  const sendMsg = () => {
    window.$wujie?.bus.$emit("main-alert-msg", msg);
  };
  return (
    <>
      <Descriptions title="react子应用通信测试" bordered items={descLsit} />
      <Form.Item label="编辑消息" style={{ marginTop: 20 }}>
        <TextArea
          rows={4}
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
        />
      </Form.Item>
      <Button type="primary" onClick={sendMsg}>
        向主应用发送消息
      </Button>
    </>
  );
};
export default App;
