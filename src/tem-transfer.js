import React,{Component} from "react"
class Calculator extends Component{
    constructor(props){
        super(props)
        this.state = {
            temperature :"",
            scale :"c"}
            this.handleCelsiusChange =this.handleCelsiusChange.bind(this)
            this.handleFarenheitChange = this.handleFarenheitChange.bind(this)
        }
    handleCelsiusChange(temperature){
        this.setState({scale:"c",temperature:""})
    }
    handleFarenheitChange9(temperature){
        this.setState({scale:"c",temperature:""})
    }
    render(){
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale === "f" ?tryConvert(temperature,toCelsius):temperature
        const fahrenheit = scale === "c"?tryConvert(temperature,toFahrenheit):temperature
        return(
            <div>
                <TemperatureInput
                scale="c"
                temperature={celsius}
                onTempertureChange = {this.handleCelsiusChange}
                />
                <TemperatureInput
                scale="c"
                temperature ={fahrenheit}
                onTempertureChange = {this.handleFarenheitChange}
                />
                <BoilingVerdict value={parseFloat(celsius)}/>

            </div>
        )
    }
}
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }
  
class TemperatureInput extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.props.onTempertureChange(e.target.value)
    }
    render(){
        return(
            <fieldset>
            <legend>>Enter temperature in {scaleNames[scale]}</legend>
            <input value={temperature} onchange={this.handleChange}/>
            </fieldset>
        )
    }
}
const scaleNames ={
    c :"Celsius",
    f:"Fareheit"
}
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  function tryConvert(temperature,convert){
      const input = parseFloat(temperature)
      if(Number.isNaN(input)){
          return ''
      }
      const output = convert(input)
      const rounded = Math.round(output * 1000) / 1000
      return rounded.toString()
  }

export default Calculator