import React from 'react'
import ReactDOM from 'react-dom'
import uriHangar from './app/uri-hangar'
import App from './app/main/App.jsx' /* Import App root  */

const app_wrapper = document.getElementById('root');
const domain = 'www.gemoutreach.org'

app_wrapper
  ? ReactDOM.render(
    <App uriHangar={uriHangar} domain={domain} />,
    app_wrapper
  ) : () => { console.log(`Application unable to start. App wrapper value comes back as ${typeof (app_wrapper)}.`) }
