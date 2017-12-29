import React from 'react'
import axios from 'axios'

/* eslint-disable */
export default class TestApi extends React.Component {

  getTopics() {
    axios.get('/api/topics')
      .then(r => {
        console.log(r)
      }).catch(err => {
        console.log(err)
      })
  }

  login() {
    axios.post('/api/user/login', {
      accessToken: '4e11d653-2bb5-404d-ab80-eec7813ac756'
    }).then(r => {
      console.log(r)
    }).catch(err => {
      console.log(err)
    })
  }

  markAll() {
    axios.post('/api/message/mark_all?needAccessToken=true')
    .then(r => {
      console.log(r)
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.getTopics}>topics</button>
        <button onClick={this.login}>login</button>
        <button onClick={this.markAll}>markAll</button>
      </div>
    )
  }
}
/* eslint-enable */
