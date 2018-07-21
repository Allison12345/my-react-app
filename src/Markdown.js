import React, { Component } from 'react'
import Remarkable from 'remarkable'
class MarkdownEditor extends Component {
  constructor(props) {
    super(props)
    this.state = { value: 'hello **world**' }
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  getRawMarkup = () => {
    const md = new Remarkable()
    const markdown = md.render(this.state.value)
    console.log(markdown)
    return { __html: markdown }
  }
  clickHandler = () => {
    this.setState({
      value: 'new value'
    })
  }
  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <strong>加粗的文本</strong>
        <button onClick={this.clickHandler}>改变textarea的值</button>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          // value={this.state.value}
          defaultValue={this.state.value}
        />
        <h3>Output1</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
        <h3>Output2</h3>
        <div className="content">{this.getRawMarkup().__html}</div>
      </div>
    )
  }
}
export default MarkdownEditor
