import React from 'react'
import FancyBorder from './fancyborder'
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="dialog-title">{props.title}</h1>
      <p className="dia-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  )
}
export default Dialog