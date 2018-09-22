import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
import registerServiceWorker from './registerServiceWorker'
import SignUpDialog from './dialog';

ReactDOM.render(
  <SignUpDialog />,
  document.getElementById('root')
)
registerServiceWorker()
