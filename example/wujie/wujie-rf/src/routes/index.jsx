import React from "react";
import About from "../componets/home";
import Skip from "../componets/skip";
import Connect from "../componets/connect";
import KeepAlive from "../componets/keepAlive";
import Isolation from "../componets/isolation";

// 通过权限表生成路由表
export const routes = [
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/skip",
    element: <Skip />,
  },
  {
    path: "/connect",
    element: <Connect />,
  },
  {
    path: "/keepAlive",
    element: <KeepAlive />,
  },
  {
    path: "isolation",
    element: <Isolation />,
  },
  // {
  //   path: "keepAliveView",
  //   element: <KeepAliveView />,
  // },
];
