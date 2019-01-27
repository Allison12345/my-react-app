import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Clock from './test2/clock'
import Commently from './comment/comment'
import SignUPDiglog from './signupdialog/signupdialog'
import LoginControl from './login/login'
import List from './pages/list'
import Detail from './pages/detail'
import NameFrom from './test2/name-form'
import Favorfrom from './test2/select'
import Calculator from './tem-transfer/tem-transfer'
import Toggle from './test2/toggle'
import Warn from './warn/warn'
import FilterableProductTable from './table/table'
import Apply from './apply/Apply'
import Game from './game/tic-tac-toe'
import LinksPage from './LinksPage'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={LinksPage} />
          <Route path="/list" component={List} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/clock" component={Clock} />
          <Route path="/comment" component={Commently} />
          <Route path="/signupdialog" component={SignUPDiglog} />
          <Route path="/logincontrol" component={LoginControl} />
          <Route path="/namefrom" component={NameFrom} />
          <Route path="/favorfrom" component={Favorfrom} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/toggle" component={Toggle} />
          <Route path="/warn" component={Warn} />
          <Route
            path="/filterableproducttable"
            component={FilterableProductTable}
          />
          <Route path="/apply" component={Apply} />
          <Route path="/game" component={Game} />
        </div>
      </Router>
    )
  }
}
export default App
