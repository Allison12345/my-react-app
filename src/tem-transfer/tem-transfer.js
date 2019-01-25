import React, { Component } from 'react'
import TemperatureInput from './temperatureinput'
import BoilingVerdict from './boilingverdict'
import tryConvert from './tryconvert'
import toFahrenheit from './tofahrenheit'
import toCelsius from './tocelsius'

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: '',
      scale: 'c'
    }
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  }
  handleCelsiusChange() {
    this.setState({ scale: 'c', temperature: '' })
  }
  handleFahrenheitChange() {
    this.setState({ scale: 'f', temperature: '' })
  }
  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius =
      scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTempertureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTempertureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict value={parseFloat(celsius)} />
      </div>
    )
  }
}


export default Calculator
