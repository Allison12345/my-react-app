import React, { Component } from 'react'
import WarnBanner from './warnbanner'
class Warn extends Component {
  constructor(props) {
    super(props)
    this.state = { showWarnng: true }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }
  handleToggleClick() {
    this.setState(prevState => ({
      showWarnng: !prevState.showWarnng
    }))
  }
  render() {
    return (
      <div>
        <WarnBanner warn={this.state.showWarnng} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarnng ? 'hide' : 'show'}
        </button>
      </div>
    )
  }
}

export default Warn
