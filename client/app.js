import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'  // eslint-disable-line
import App from './views/App'

const root = document.getElementById('root')
const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
const render = (Component) => {
  renderMethod(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    root,
  )
}
// 渲染
render(App)

// 热更新
if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default // eslint-disable-line
    render(NextApp)
  })
}
