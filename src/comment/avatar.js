import React from 'react'
function Avatar(props) {
  return (
    <img
      className="Avatar"
      alt={props.author.name}
      src={props.author.avatarUrl}
    />
  )
}
export default Avatar