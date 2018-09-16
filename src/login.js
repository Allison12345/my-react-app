import React, { Component } from 'react'
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
function UserGreeting(props) {
  return <h1>Welcome back</h1>
}
function GuestGreeting(props) {
  return <h1>Please sign up</h1>
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}
function LoginButton(props) {
  return <button onClick={props.onClick}>login</button>
}
function LogoutButton(props) {
  return <button onClick={props.onClick}>logout</button>
}

export default LoginControl
