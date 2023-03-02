import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';

ReactDom.render(
    <React.StrictMode>
        <h1>Just React</h1>
    </React.StrictMode>,
    document.querySelector('#app')
);

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.querySelector('#root')
);