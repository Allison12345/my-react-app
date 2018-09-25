import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
import registerServiceWorker from './registerServiceWorker'

import FilterableProductTable from './table';

ReactDOM.render(
  <FilterableProductTable  />,
  document.getElementById('root')
)
registerServiceWorker()
