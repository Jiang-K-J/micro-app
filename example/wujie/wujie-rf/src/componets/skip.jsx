import React from "react";
import { Button, Flex } from "antd";
const App = () => {
  const onClick = (e) => {
    if (window.$wujie) {
      const router = window.$wujie.props.router;
      router?.push(e);
    }
  };
  return (
    <div>
      <h1>react子应用跳转测试</h1>
      <Flex gap="small" wrap justify="center">
        <Button color="default" variant="filled" onClick={() => onClick("/main-about")}>
          跳转到主应用的首页
        </Button>
        <Button
          color="danger"
          variant="solid"
          onClick={() => onClick("/vue3-about")}
        >
          跳转到vue3子应用
        </Button>
        <Button
          color="primary"
          variant="solid"
          onClick={() => onClick("/react-about")}
        >
          跳转到react子应用
        </Button>
      </Flex>
    </div>
  );
};

export default App;
