import React from 'react'
import Routes from '../config/router'

export default class App extends React.Component {
  componentDidMount() {
    // do something here
  }
  render() {
    return [
      <Routes key="routes" />,
    ]
  }
}
