// 打包服务端需要渲染的文件
const path = require('path')
// webpackMerge 官方提供的 合并webpack配置的的包
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = webpackMerge(baseConfig, {
  target: 'node',
  entry: {
    app: path.join(__dirname, '../client/server-entry.js'),
  },
  // 输出文件
  output: {
    // 对应的文件名 name 代表 entry下的 key
    filename: 'server-entry.js',
    // 输出模块的规范
    libraryTarget: 'commonjs2'
  }
})
