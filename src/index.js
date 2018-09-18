import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
import registerServiceWorker from './registerServiceWorker'
import NameFrom from './name-form';

ReactDOM.render(
  <NameFrom />,
  document.getElementById('root')
)
registerServiceWorker()
