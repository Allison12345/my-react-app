import React, { Component } from 'react'

class Person extends Component {
  render() {
    return (
      <div className="container">
        <div>{this.props.name}</div>
        <div>{this.props.age}</div>
      </div>
    )
  }
}
export default Person
