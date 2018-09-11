import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Comment from './comment'

ReactDOM.render(<Comment
    />, document.getElementById('root'));
registerServiceWorker();
