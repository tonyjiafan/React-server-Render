const path = require('path')

module.exports = {
  output: {
    // 输出文件的的存放目录
    path: path.join(__dirname, '../dist'),
    // 静态资源引入 路径标识
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.jsx', '.js']
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
  }
}
