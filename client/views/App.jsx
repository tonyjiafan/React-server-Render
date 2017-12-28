import React from 'react'
import {
  Link,
} from 'react-router-dom'
import Routes from '../config/router'

const style = {
  bg: '#fc5144',
  color: '#fff',
}

export default class App extends React.Component {
  componentDidMount() {
    // do something here
  }

  render() {
    return [
      <div style={{ background: style.bg, color: style.color }} key="home">这Tm 是主页</div>,
      <div key="banner">
        <Link to="/list">首页</Link>
        <br />
        <Link to="/detail">详情页</Link>
      </div>,
      <Routes key="routes" />,
    ]
  }
}
