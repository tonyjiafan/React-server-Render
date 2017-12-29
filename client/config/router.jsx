import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'

import TopList from '../views/top-list/index'
import TopDetails from '../views/top-details/index'

export default () => [
  <Route path="/" render={() => <Redirect to="/list" />} exact key="first" />,
  <Route path="/list" component={TopList} key="list" />,
  <Route path="/detail" component={TopDetails} key="detail" />,
]
