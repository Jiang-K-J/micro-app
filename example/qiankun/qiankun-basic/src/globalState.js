// globalState.js
import { initGlobalState } from 'qiankun';

// 定义初始状态
const initialState = {
  user: { name: 'Alice', role: 'admin' },
  theme: 'light',
};

// 初始化全局状态
const actions = initGlobalState(initialState);

// 监听状态变化
actions.onGlobalStateChange((state, prev) => {
  console.log('[主应用] 状态发生变化:', state, prev);
});

export default actions;
