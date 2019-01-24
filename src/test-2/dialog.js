import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

const Item = props => (
  <Link to={`/detail/${props.id}`}>
    <div><Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?"
      >
        <input value={props.login} onChange={this.handleChange} ></input>
        <button onClick={this.handleSignUp} />
        Sign me up
      </Dialog>
      </div>
  </Link>
)
class SignUpDialog extends Component {
  constructor(props) {
    super(props)
    this.state = { login: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }
  handleChange(e) {
    this.setState({ login: e.target.value })
  }
  handleSignUp() {
    alert('Welcome aboard, ${this.state.login}!')
  }
  render() {
    return (
      <Item
        login={this.state.login}
        
      ></Item>
    )
  }
}
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="dialog-title">{props.title}</h1>
      <p className="dia-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  )
}
export default SignUpDialog
