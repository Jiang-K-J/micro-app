const { name } = require("./package");
const LimitLinesPlugin = require("./LimitLinesPlugin");

module.exports = {
  webpack: (config) => {
    // 设置输出配置
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = "umd";
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;

    // 添加 LimitLinesPlugin
    config.plugins.push(
      new LimitLinesPlugin({
        limit: 600, // 设置最大行数
        fileTypes: [".vue", ".js", ".ts"], // 检查的文件类型
        excludeFiles: ["App.vue", "main.js"], // 白名单文件名
      })
    );

    return config;
  },
  devServer: (_) => {
    const config = _;

    config.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};
