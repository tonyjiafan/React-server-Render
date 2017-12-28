import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'

import TopList from '../views/topList/index'
import TopDetails from '../views/topDetails/index'

export default () => [
  <Route path="/" render={() => <Redirect to="/list" />} exact key="first" />,
  <Route path="/list" component={TopList} key="list" />,
  <Route path="/detail" component={TopDetails} key="detail" />,
]
