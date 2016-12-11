import React from 'react'
import { render } from 'react-dom'
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router'

import App from './app'
import Home from './home'
import About from './about'

render (
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="about" component={ About } />
    </Route>
  </Router>,
  document.getElementById('root')
)
