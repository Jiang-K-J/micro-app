import React from "react";
import {routes} from "./routes/index";
import { useRoutes } from "react-router-dom";

function App() {
  //描述用户路由权限的数组
  const elment = useRoutes(routes);

  return <div id="App">{elment}</div>;
}

export default App;
