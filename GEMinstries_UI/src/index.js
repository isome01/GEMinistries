import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/main/App.jsx'; /* Import App root  */

const app_wrapper = document.getElementById('root');

app_wrapper ? ReactDOM.render(<App />, app_wrapper) : () => {
    console.log(
        `Application unable to start. App wrapper value comes back as ${app_wrapper}`
    );
}