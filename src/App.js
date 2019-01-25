import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Clock from './test-2/clock'
import Commently from './comment/comment'
import SignUPDiglog from './signupdialog/signupdialog'
import LoginControl from './login/login'
import List from './pages/list'
import Detail from './pages/detail'

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
          </div>
          <div style={{ border: '1px solid black', padding: '20px' }}>
            <Route path="/list" component={List} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/clock" component={Clock} />
            <Route path="/comment" component={Commently} />
            <Route path="/signupdialog" component={SignUPDiglog} />
            <Route path="/logincontrol" component={LoginControl} />
          </div>
        </div>
      </Router>
    )
  }
}
export default App
