import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun';
import prefixPlugin from './aaaa';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
export default defineConfig({
  base: '/sub-vue', // 和基座中配置的activeRule一致
  server: {
    port: 3002,
    cors: true,
    origin: 'http://localhost:3002'
  },
  plugins: [
    vue(),
    qiankun('sub-vue', { // 配置qiankun插件
      useDevMode: true
    }),
  ],
  build: {
    cssCodeSplit: false, // 禁用 CSS 分离
  },
  css: {
    postcss: {
      plugins: [
        prefixPlugin({
          prefix: '.my-app', // 添加的前缀
          transform(prefix, selector, prefixedSelector) {
            // 这里可以排除一些特定的选择器
            if (selector === 'html' || selector.includes("el") ||selector.includes("root")) {
              return selector
            }
            return prefixedSelector
          },
          // exclude: ['.global'], // 排除全局样式的前缀添加
        }),
      ],
    },
  }
})
