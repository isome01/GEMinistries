import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import uriHangar from './uri-hangar'

const domain = 'www.gemoutreach.org'
const wrapper = document.getElementById('root')
wrapper
  ? ReactDOM.render(
  <App uriHangar={uriHangar} domain={domain}/>,
  wrapper
) : null
