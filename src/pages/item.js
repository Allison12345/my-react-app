import React from 'react'
import { Link } from 'react-router-dom'

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

export default Item
