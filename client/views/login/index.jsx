import React from 'react'

const styleObj = {
  warp: {
    width: '100%',
    minHeight: '100%',
  },
}

export default class Home extends React.Component {
  componentDidMount() {
    // do something
  }
  render() {
    return (
      <div style={styleObj.warp}>
        我就是登录页
      </div>
    )
  }
}
