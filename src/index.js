import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LoginControl from "./login"


ReactDOM.render(<LoginControl
    />, document.getElementById('root'));
registerServiceWorker();
