import { createApp } from 'vue'
import App from './App.vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import { router, abstractRouter } from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./public-path"

let app;
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  createApp(App).use(router).use(ElementPlus).mount('#app');
} else {
  renderWithQiankun({
    // 子应用挂载
    mount(props) {
      let routerInstance = null;
      console.log('props', props?.path);
      if (props?.path) {
        routerInstance = abstractRouter;
      } else {
        routerInstance = router;
      }
      app = createApp(App);
      // 使用 provide 将 props 传递给所有后代组件
      app.provide('qiankunProps', props); 
      app.use(routerInstance).use(ElementPlus);
      app.mount(props.container.querySelector('#app'));
      if (props?.path) {
        routerInstance.push(props.path)
      }
    },
    // 只有子应用第一次加载会触发
    bootstrap() {
      console.log('vue app bootstrap');
    },
    // 更新
    update() {
      console.log('vue app update');
    },
    // 卸载
    unmount() {
      console.log('vue app unmount');
      app?.unmount();
    }
  });
}
