import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Comment from './comment-1'

ReactDOM.render(<Comment
    />, document.getElementById('root'));
registerServiceWorker();
