import React from "react";
import { Button, Flex } from "antd";
import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    window.history.pushState(null, null, e);
  };
  return (
    <>
      <h1>react子应用</h1>
      <Flex gap="small" wrap>
        <Button color="default" variant="filled" onClick={() => onClick("/")}>
          跳转到主应用的首页
        </Button>
        <Button
          color="primary"
          variant="solid"
          onClick={() => onClick("/sub-react")}
        >
          跳转到react子应用
        </Button>
        <Button
          color="danger"
          variant="solid"
          onClick={() => onClick("/sub-vue")}
        >
          跳转到vue3子应用
        </Button>
      </Flex>
    </>
  );
};

export default App;
