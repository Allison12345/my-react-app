import './list.css'
import React, { Component } from 'react'
import axios from 'axios'

import Item from './item'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      err: ''
    }
  }
  getList = () => {
    axios
      .get('/news.json')
      .then(response => {
        console.log(response)
        this.setState({
          list: response.data
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({
          err: error.message
        })
      })
  }
  componentDidMount() {
    this.getList()
  }
  render() {
    if (this.state.err) {
      return <div className="err">{this.state.err}</div>
    }
    return (
      <div>
        {this.state.list.map((x, index) => {
          return (
            <Item
              title={x.title}
              author={x.author}
              time={x.time}
              key={index}
              id={index}
            />
          )
        })}
      </div>
    )
  }
}
export default List
