import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const middleware = [thunk]
const store = createStore(reducer, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
