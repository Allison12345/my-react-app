import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

const Item = props => (
  <Link to={`/detail/${props.id}`}>
    <div className="Comment">
      <UserInfo author={props.author} />
      <div className="comment-Text">{props.text}</div>
      <div className="comment-date">{formateDate(props.date)}</div>
    </div>
  </Link>
)

function formateDate(date) {
  return new Date(date).toLocaleTimeString()
}
setInterval(formateDate)

function Avatar(props) {
  return (
    <img
      className="Avatar"
      alt={props.author.name}
      src={props.author.avatarUrl}
    />
  )
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar author={props.author} />
      <div className="UserInfo-name">{props.author.name}</div>
    </div>
  )
}

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
      <Item
        author={this.state.author}
        text={this.state.text}
        date={this.state.date}
      />
    )
  }
}

export default Commently
