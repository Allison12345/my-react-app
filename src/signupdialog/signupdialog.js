import React, { Component } from 'react'
import Dialog from './dialog'

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
    window.alert(`Welcome aboard, ${this.state.login}!`)
  }
  render() {
    return (
      <Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?">
        <input value={this.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Sign me up</button>
      </Dialog>
    )
  }
}

export default SignUpDialog
