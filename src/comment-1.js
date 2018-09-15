import React, { Component } from 'react'

function formateDate(date) {
  return  new Date(date).toLocaleTimeString()
}
setInterval(formateDate)

function Avatar(props){
    return(
        <img className='Avatar'
        alt={props.author.name}
        src={props.author.avatarUrl}
        />
    )
}

function UserInfo(props){
    return(
        <div className="UserInfo">
     <Avatar author={props.author}/>
        <div className="UserInfo-name">
        {props.author.name}
        </div>
        </div>
    )
}

class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      text: 'this is a lovely kity',
      author: {
        name: 'kity',
        avatarUrl: "./logo.svgnpm "
      }
    }
  }
  render() {
    return (
      <div className="Comment">
        <UserInfo author={this.state.author}/>
        <div className="comment-Text">{this.state.text}</div>
        <div className="comment-date">{formateDate(this.state.date)}</div>
      </div>
    )
  }
}

export default Comment
