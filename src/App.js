import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './pages/list.css'
import List from './pages/list'
import Clock from './test-2/clock'
import Commently from './test-2/comment'
import signUPDiglog from './test-2/dialog'
import LoginControl from './test-2/login'
const Detail = props => <div>{props.match.params.id}</div>
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/list" component={List} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/clock" component={Clock} />
          <Route path="/comment" component={Commently} />
          <Route path="/dialog" component={signUPDiglog}/>
          <Route path="logincontrol" component={LoginControl}/>

        </div>
      </Router>
    )
  }
}
export default App
