import React, { Component } from 'react'

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => <li key={item.id}>{item.text}</li>)}
      </ul>
    )
  }
}

class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.state = { items: [], text: '' }
  }
  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <input
            id="new_todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    )
  }
  handleChange = e => {
    this.setState({ text: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    if (!this.state.text.length) {
      return
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState(prevState => {
      const newItems = prevState.items
      newItems.push(newItem)
      return {
        items: newItems,
        text: ''
      }
    })
  }
}

export default TodoApp
