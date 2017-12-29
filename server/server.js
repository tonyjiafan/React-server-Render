const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const session = require('express-session')
const ReactDomServer = require('react-dom/server')
const fs = require('fs')
const path = require('path')
const app = express()


app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({
  maxAge: 10 * 60 * 1000,
  name: 'tid',
  resave: false,
  saveUninitialized: false,
  secret: 'react cnode class'
}))

// 判断环境
const isDev = process.env.NODE_ENV === 'development'

// title icon
app.use(favicon(path.join(__dirname, '../favicon.ico')))

app.use(`/api/user`, require('./util/handle-login'))
app.use(`/api`, require('./util/proxy'))


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
  console.log(`http://172.0.0.1:9090/`)
})
