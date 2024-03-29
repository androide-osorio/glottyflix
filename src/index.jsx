import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'

import { configureStore } from './store'
import * as serviceWorker from './serviceWorker'

const store = configureStore()
const rootEl = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>
, rootEl);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
