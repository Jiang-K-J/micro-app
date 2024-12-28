import React from "react";
import { Card, List, Button } from "antd";
import actions from '../globalState';
const App = ({ data }) => {

  return (
    <>
    <h1>我是主应用</h1>
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
      <Button type="primary" onClick={()=>actions.setGlobalState({msg:"我是主应用，我给自己发信息"})}>
       向主应用发送信息
      </Button>
      <Button style={{marginLeft:"10px",backgroundColor:"#fa8c16"}} onClick={()=>actions.setGlobalState({listData:data.map((item)=>({title:item.title+"修改了"}))})}>
       主应用修改发送给子应用的信息
      </Button>
    </>
  );
};

export default App;
