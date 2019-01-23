import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(
      this
    )
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this)
  }
  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value)
  }
  handleInStockInputChange() {
    this.props.onStockOnly(!this.props.inStockOnly)
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
        />
        <p>
          <input
            type="checkbox"
            value={this.props.inStockOnly}
            onChange={this.handleInStockInputChange}
          />
          {''}
          Only show products in stock
        </p>
      </form>
    )
  }
}
export default SearchBar