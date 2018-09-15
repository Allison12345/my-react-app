import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Toggle from './toggle'

ReactDOM.render(<Toggle
    />, document.getElementById('root'));
registerServiceWorker();
