import React, { Component } from 'react'
import logo from './logo.svg'
import './Apply.css'
import Person from './Person'
import TodoApp from './Todo'
import MarkdownEditor from './Markdown'
import Timer from './timer'
import Jack from './jack'

class Apply extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: ['hello', 'hi', 'world'],
      name: 'aijiao'
    }
  }
  onClick = () => {
    const persons = this.state.persons
    persons.push(persons.length + 1)
    this.setState({
      persons: persons
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.onClick}>add</button>
        {this.state.persons.map(function(item, index) {
          return <Person name={item} age={index} key={index} />
        })}
        <Jack name={this.state.name} />
        <Timer />
        <TodoApp />
        <MarkdownEditor />
      </div>
    )
  }
}

export default Apply
