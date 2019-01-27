
import React , {Component} from "react"
class FavorFrom extends Component {
    constructor(props){
        super(props)
        this.state = {value:"orange"}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({value : event.target.value})
    }
    handleSubmit(event){
        alert("your favorite food is " + this.state.value)
        event.preventDefault()
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            Please pick your favorite food
                <label>
                    <select value={this.state.value} onChange={this.handleChange}>
                    <option value="orange">orange</option>
                    <option value="apple">apple</option>
                    <option value="pieapple">pieapple</option>
                    <option value="pear">pear</option>
                    </select>
                </label>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}
export default FavorFrom