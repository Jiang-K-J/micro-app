import React from "react";
import { Button, Flex } from "antd";
import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    navigate(e);
  };
  return (
    <>
      <h1>主应用</h1>
      <Flex gap="small" wrap>
        <Button type="primary" onClick={() => onClick("/")}>
          跳转到首页
        </Button>
        <Button onClick={() => onClick("/sub-react")}>跳转到react子应用</Button>
        <Button type="dashed" onClick={() => onClick("/sub-vue")}>
          跳转到vue3子应用
        </Button>
      </Flex>
    </>
  );
};

export default App;
