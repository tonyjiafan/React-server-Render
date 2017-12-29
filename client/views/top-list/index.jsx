import React from 'react'
import {
  observer,
  inject,
} from 'mobx-react'
// 指定prop的类型
import PropTypes from 'prop-types'
import { AppState } from '../../store/app-state'
@inject('appState') @observer

export default class TopList extends React.Component {
  // static propTypes = {
  //   appState: PropTypes.instanceOf(AppState).isRequired,
  // }
  constructor() {
    super()
    this.changeName = this.changeName.bind(this)
  }
  componentDidMount() {
    // do something
  }
  changeName(e) {
    this.props.appState.changeName(e.target.value)
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.changeName} />
        <br />
        <span> {this.props.appState.msg} </span>
      </div>
    )
  }
}

TopList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
}
