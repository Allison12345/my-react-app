import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
const Item = props => (
  <Link to={`/detail/${props.id}`}>
    <div>
      <Greeting isLoggedIn={props.isLoggedIn} />
      {props.button}
    </div>
  </Link>
)
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
    return <div>
      <Item
      isLoggedIn={this.state.isLoggedIn}
      ></Item>
    </div>
  }
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
function LoginButton(props) {
  return <button onClick={props.onClick}>login</button>
}
function LogoutButton(props) {
  return <button onClick={props.onClick}>logout</button>
}

export default LoginControl
