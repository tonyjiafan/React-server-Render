import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'

import Login from '../views/login/index'
import TopList from '../views/top-list/index'
import TopDetails from '../views/top-details/index'
import TestApi from '../views/test/api-test'

export default () => [
  <Route path="/" render={() => <Redirect to="/login" />} exact key="first" />,
  <Route path="/login" component={Login} key="login" />,
  <Route path="/list" component={TopList} key="list" />,
  <Route path="/detail" component={TopDetails} key="detail" />,
  <Route path="/test" component={TestApi} key="test" />,
]
