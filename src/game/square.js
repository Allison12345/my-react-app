import React from 'react'
function Square(props) {
  return (
    <button className="squre" onClick={props.onClick}>
      {props.value}
    </button>
  )
}
export default Square