const express = require('express')
const ReactDomServer = require('react-dom/server')
const fs = require('fs')
const path = require('path')
const app = express()

// 判断环境
const isDev = process.env.NODE_ENV === 'development'


if (!isDev) {
  const serverEntry = require('../dist/server-entry').default
  const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')
  app.use('/public', express.static(path.join(__dirname, '../dist')))
  app.get('*', (req, res) => {
    const appString = ReactDomServer.renderToString(serverEntry)
    res.send(template.replace(/<div id="root"><\/div>/, `<div id="root">${appString}</div>`))
  })
} else {
  // 不是开发环境 的操作
  const devStatic = require('./util/dev-static')
  devStatic(app)
}


app.listen(9090, function (){
  // console.log(serverEntry)
  console.log(`http://172.0.0.1:9090/`)
})
