import React, { Component } from 'react'
import './Header.css'
import Form from './Form'

class Header extends Component {
  render() {
    return (
      <>
        <h1 className="header__headline">React todo app:</h1>
        <Form createTodo={this.props.createTodo} />
        <p className="header__errorDisplay">{this.props.errorDisplay}</p>
      </>
    )
  }
}

export default Header