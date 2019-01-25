import React, { Component } from 'react'
import Greeting from './greeting'
import LoginButton from './loginbutton'
import LogoutButton from './logoutbutton'

class LoginControl extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoggedIn: false }
    this.handleLoginOnclick = this.handleLoginOnclick.bind(this)
    this.handleLoginOutOnClick = this.handleLoginOutOnClick.bind(this)
  }

  handleLoginOnclick() {
    this.setState({ isLoggedIn: true })
  }
  handleLoginOutOnClick() {
    this.setState({ isLoggedIn: false })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutOnclick} />
    } else {
      button = <LoginButton onClick={this.handleLoginOnclick} />
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}


export default LoginControl
  