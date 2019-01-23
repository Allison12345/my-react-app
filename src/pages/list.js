import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Link } from 'react-router-dom'
const Item = props => (
  <Link to={`/detail/${props.id}`}>
    <div className="news-item">
      <div className="news-item__title">{props.title}</div>
      <div className="news-item__info">
        <div>{props.author}</div>
        <div>{props.time}</div>
      </div>
    </div>
  </Link>
)

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