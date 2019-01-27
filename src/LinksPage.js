import React from 'react'
import { Link } from 'react-router-dom'

const LinksPage = () => (
  <div className="weui-cells">
    <Link to="/list" className="weui-cell">
      list
    </Link>
    <Link to="/clock" className="weui-cell">
      clock
    </Link>
    <Link to="/comment" className="weui-cell">
      comment
    </Link>
    <Link to="/signupdialog" className="weui-cell">
      signupdialog
    </Link>
    <Link to="/logincontrol" className="weui-cell">
      logincontrol
    </Link>
    <Link to="/namefrom" className="weui-cell">
      namefrom
    </Link>
    <Link to="/favorfrom" className="weui-cell">
      favorfrom
    </Link>
    <Link to="/calculator" className="weui-cell">
      calculator
    </Link>
    <Link to="/toggle" className="weui-cell">
      toggle
    </Link>
    <Link to="/warn" className="weui-cell">
      warn
    </Link>
    <Link to="/FilterableProductTable" className="weui-cell">
      FilterableProductTable
    </Link>
    <Link to="/apply" className="weui-cell">
      apply
    </Link>
    <Link to="/game" className="weui-cell">
      game
    </Link>
  </div>
)

export default LinksPage
