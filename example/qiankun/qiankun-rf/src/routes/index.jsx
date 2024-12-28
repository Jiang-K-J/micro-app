import React from "react";
import SystemFiles from "../componets/home";
import ReadFiles from "../componets/skip2";
import HomePage from "../componets/connect2";
import Isolation from "../componets/isolation2";
import KeepAliveView from "../componets/keepAliveView";

// 通过权限表生成路由表
export const routes = [
  {
    path: "/",
    element: <SystemFiles />,
  },
  {
    path: "skip2",
    element: <ReadFiles />,
  },
  {
    path: "connect2",
    element: <HomePage />,
  },
  {
    path: "isolation2",
    element: <Isolation />,
  },
  {
    path: "keepAliveView",
    element: <KeepAliveView />,
  },
];
