import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
import registerServiceWorker from './registerServiceWorker'
import NumberList from './key'

ReactDOM.render(
  <NumberList />,
  document.getElementById('root')
)
registerServiceWorker()
