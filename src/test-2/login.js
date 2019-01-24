import React, { Component } from 'react'

function LoginButton(props) {
  return <button onClick={props.onClick}>login</button>
}
function LogoutButton(props) {
  return <button onClick={props.onClick}>logout</button>
}

function UserGreeting() {
  return <h1>Welcome back</h1>
}
function GuestGreeting() {
  return <h1>Please sign up</h1>
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

class LoginControl extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoggedIn: false }
    this.handleLoginOnClick = this.handleLoginOnClick.bind(this)
    this.handleLoginOutOnClick = this.handleLoginOutOnClick.bind(this)
  }
  handleLoginOnClick() {
    this.setState({ isLoggedIn: true })
  }
  handleLoginOutOnClick() {
    this.setState({ isLoggedIn: false })
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLoginOutOnClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginOnClick} />
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
