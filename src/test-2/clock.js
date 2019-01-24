
import React , { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
const Item = props => (
    <Link to={`/detail/${props.id}`}>
      <div >{props.date.toLocaleTimeString()}
      </div>
    </Link>
  )
class Clock extends Component {
    constructor(props){
        super(props);
            this.state = { date:new Date()}
    }
componentDidMount(){
    this.timerID = setInterval(
        () => this.tick(),1000
    )
}
componentWillUnmount(){
    clearInterval(this.timerID)
}
tick(){
    this.setState({date: new Date()})
}

render(){
        return(
            <div>
                <h1>Hello world!</h1>
                <Item date={this.state.date}></Item>
            </div>
        )
    }

}


export default Clock