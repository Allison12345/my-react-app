import React, { Component } from 'react'
import UserInfo from './userinfo'
import formateDate from './formatedate'

class Commently extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      text: 'this is a lovely kity',
      author: {
        name: 'kity',
        //avatarUrl: require('./logo.png')
      }
    }
  }
  render() {
    return (
      <div className="Comment">
      <UserInfo author={this.state.author} />
      <div className="comment-Text">{this.state.text}</div>
      <div className="comment-date">{formateDate(this.state.date)}</div>
    </div>
    )
  }
}

export default Commently
