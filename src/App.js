import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Person from './Person'
import TodoApp from './Todo'
import MarkdownEditor from './Markdown'

class Jack extends Component {
  render() {
    return <div>{this.props.name}</div>
  }
}
class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = { seconds: 0, date: new Date() }
  }

  tick() {
    this.setState(prevState => ({ seconds: prevState.seconds + 1 }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return (
      <div>
        Seconds:{this.state.seconds}
        
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: ['hello', 'hi', 'world'],
      name: 'aijiao'
    }
    const arr1 = [1, 2, 3]
    const arr2 = arr1.slice()
    const arr3 = [...arr1, 4, 5, 6]
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

export default App
