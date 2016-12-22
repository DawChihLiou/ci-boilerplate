import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import reducer from './reducer'
import AppRouter from './router'

const logger = createLogger()

const configureStore = () => {
  return createStore(
    reducer,
    applyMiddleware(logger)
  )
}

const store = configureStore()
  
render (
  <Provider store={ store }>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)
