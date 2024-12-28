import React, { createContext, useContext } from 'react';

// 创建一个 Context
export const QiankunContext = createContext(null);

// 提供一个 Hook 方便子组件访问
export const useQiankunProps = () => {
  return useContext(QiankunContext);
};
