import React from 'react'
import Avatar from './avatar'
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar author={props.author} />
      <div className="UserInfo-name">{props.author.name}</div>
    </div>
  )
}
export default UserInfo