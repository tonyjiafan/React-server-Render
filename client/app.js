import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App.jsx'

// ReactDOM.hydrate(<App />, document.getElementById('root'))
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
      // ReactDOM.hydrate(<NextApp />, document.getElementById('root'))
      render(NextApp)
    })
  }
}
