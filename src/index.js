import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Page from "./warn"


ReactDOM.render(<Page
    />, document.getElementById('root'));
registerServiceWorker();
