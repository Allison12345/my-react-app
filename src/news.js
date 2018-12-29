import React, { Component } from 'react'
import './news.css' 
class Item extends Component {
  render() {
    return (
      <div className='news-item'>
        <div className='news-item__title'>{this.props.title}</div>
        <div className='news-item__info'>
          <div>{this.props.author}</div>
          <div>{this.props.time}</div>
        </div>
      </div>
    )
  }
}

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [{title:'haha',author:"2334",time:'2017'},
    {title:'ze',author:"aijiao",time:'1998'}]
    }
  }
  render() {
    return (
      <div>
        {this.state.list.map(function(x,index) {
          return <Item title={x.title} author={x.author} time={x.time} key={index}/>
        })}
      </div>
    )
  }
}
export default News