import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';  // eslint-disable-line
import App from './App.jsx';

const root = document.getElementById('root')

if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate
  const render = Component => { // eslint-disable-line
    renderMethod(
      <AppContainer>
        <Component />
      </AppContainer>,
      root,
    )
  }
  // 渲染
  render(App)
  // 热更新
  if (module.hot) {
    module.hot.accept('./App.jsx', () => {
      const NextApp = require('./App.jsx').default // eslint-disable-line
      render(NextApp)
    })
  }
}
