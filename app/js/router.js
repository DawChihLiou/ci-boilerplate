import React from 'react'
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router'

import App from './app'
import Home from './home'
import About from './about'

import '../sass/index.sass'

const AppRouter = () => (
  <Router history={ browserHistory }>
     <Route path="/" component={ App }>
       <IndexRoute component={ Home } />
       <Route path="about" component={ About } />
     </Route>
   </Router>
)

export default AppRouter
