import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Clock from './test-2/clock'
import Commently from './comment/comment'
import SignUPDiglog from './signupdialog/signupdialog'
import LoginControl from './login/login'
import List from './pages/list'
import Detail from './pages/detail'
import NameFrom from './test-2/name-form'
import Favorfrom from './test-2/select'
import Calculator from './tem-transfer/tem-transfer'
import Toggle from './test-2/toggle'
import Warn from './warn/warn'
import FilterableProductTable from './table/table'
import Apply from './apply/Apply'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="weui-cells">
            <Link to="/list" className="weui-cell">
              list
            </Link>
            <Link to="/clock" className="weui-cell">
              clock
            </Link>
            <Link to="/comment" className="weui-cell">
              comment
            </Link>
            <Link to="/signupdialog" className="weui-cell">
              signupdialog
            </Link>
            <Link to="/logincontrol" className="weui-cell">
              logincontrol
            </Link>
            <Link to="/namefrom" className="weui-cell">
              namefrom
            </Link>
            <Link to="/favorfrom" className="weui-cell">
              favorfrom
            </Link>
            <Link to="/calculator" className="weui-cell">
            calculator
            </Link>
            <Link to="/toggle" className="weui-cell">
            toggle
            </Link>
            <Link to="/warn" className="weui-cell">
            warn
            </Link>
            <Link to="/FilterableProductTable" className="weui-cell">
            FilterableProductTable
            </Link>
            <Link to="/apply" className="weui-cell">
            apply
            </Link>
            
          </div>
          <div style={{ border: '1px solid black', padding: '20px' }}>
            <Route path="/list" component={List} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/clock" component={Clock} />
            <Route path="/comment" component={Commently} />
            <Route path="/signupdialog" component={SignUPDiglog} />
            <Route path="/logincontrol" component={LoginControl} />
            <Route path="/namefrom" component={NameFrom} />
            <Route path="/favorfrom" component={Favorfrom}/>
            <Route path="/calculator" component={Calculator}/>
            <Route path="/toggle" component={Toggle}/>
            <Route path="/warn" component={Warn}/>
            <Route path="/filterableproducttable" component={FilterableProductTable}/>
            <Route path="/apply" component={Apply}/>
          </div>
        </div>
      </Router>
    )
  }
}
export default App
