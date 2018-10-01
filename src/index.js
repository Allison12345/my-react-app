import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
import registerServiceWorker from './registerServiceWorker'

import FilterableProductTable from './table';
import Products from './table'
ReactDOM.render(
  <FilterableProductTable Products={Products} />,
  document.getElementById('root')
)
registerServiceWorker()
