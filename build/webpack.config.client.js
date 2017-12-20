const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// 判断环境
const isDev = process.env.NODE_ENV === 'development'

const config = {
  entry: {
    // client/app.js  作为打包文件的入口
    app: path.join(__dirname, '../client/app.js')
  },
  // 输出文件
  output: {
    // 对应的文件名 name 代表 entry下的 key
    filename: '[name].[hash].js',
    // 输出文件的的存放目录
    path: path.join(__dirname, '../dist'),
    // 静态资源引入
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',  //先执行eslint检测  通过往下继续编译未通过 就打断执行
        test: /.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ]
      },
      {
        test: /.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      }
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, '../client/template.html')
    })
  ]
}

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
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
