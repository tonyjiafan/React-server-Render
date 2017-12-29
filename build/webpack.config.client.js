const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// webpackMerge 官方提供的 合并webpack配置的的包
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
// 判断环境
const isDev = process.env.NODE_ENV === 'development'

const config = webpackMerge(baseConfig, {
  entry: {
    // client/app.js  作为打包文件的入口
    app: path.join(__dirname, '../client/app.js')
  },
  // 输出文件
  output: {
    // 对应的文件名 name 代表 entry下的 key
    filename: '[name].[hash].js'
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, '../client/template.html')
    })
  ]
})

// 开发环境下的热启动更新配置  localhost:8888/filename 进行访问
if (isDev) {
  config.entry = {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../client/app.js')
    ]
  }
  config.devServer = {
    host: '0.0.0.0',
    port: '8888',
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    overlay: {
      errors: true
    },
    publicPath: '/public',
    historyApiFallback: {
      index: '/public/index.html'
    },
    proxy: {
      '/api': 'http://localhost:9090'
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
