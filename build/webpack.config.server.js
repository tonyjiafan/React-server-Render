// 打包服务端需要渲染的文件
const path = require('path')

module.exports = {
  target: 'node',
  entry: {
    app: path.join(__dirname, '../client/server-entry.js'),
  },
  // 输出文件
  output: {
    // 对应的文件名 name 代表 entry下的 key
    filename: 'server-entry.js',
    // 输出文件的的存放目录
    path: path.join(__dirname, '../dist'),
    // 静态资源引入
    publicPath: '/public',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
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
  }
}
