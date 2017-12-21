# React-server-Render
学习搭建工程记录

##### npm i serve-favicon -S                        icon

##### npm i react-hot-loader@next

##### 启动8888端口   要执行 npm run clear

##### 坑点： 字符串转成模块的方法  server/util/dev-static.js

```
// 内存读取文件模块
const MemoryFs = require('memory-fs')
const mfs = new MemoryFs()

const bundle = mfs.readFileSync(bundlePath, 'utf-8')
const m = new Module()
m._compile(bundle, 'server-entry.js')
serverBundle = m.exports.default
```

##### 渲染的方式

```
const root = document.getElementById('root')
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate
  const render = Component => {
    renderMethod(
      <AppContainer>
        <Component />
      </AppContainer>,
      root
    )
  }
  // 渲染
  render(App)
  // 热更新
  if (module.hot) {
    module.hot.accept('./App.jsx', () => {
      const NextApp = require('./App.jsx').default
      render(NextApp)
    })
  }
}
```

