import React, { Component } from 'react'

function formateDate(date) {
  return  new Date(date).toLocaleTimeString()
}
setInterval(formateDate)
class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      text: 'this is a lovely zhuzhu',
      author: {
        name: '猪猪',
        avatarUrl: "./logo.png"
      }
    }
  }
  render() {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img
            className="Avator"
            alt={this.state.author.name}
            src={this.state.author.avatarUrl}
          />
          <div className="userInfo-name">{this.state.author.name}</div>
        </div>
        <div className="comment-Text">{this.state.text}</div>
        <div className="comment-date">{formateDate(this.state.date)}</div>
      </div>
    )
  }
}

export default Comment
