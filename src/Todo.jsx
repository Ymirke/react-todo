import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  render() {
    if (this.props.done) {
      return (
        <article onClick={() => { this.props.toggleDone(this.props.id) }} className="todoItem todoItem--done">
          <h3>{this.props.todoText}</h3>
          <button className="todoItem__deleteButton" onClick={(e) => { e.stopPropagation(); this.props.deleteTodo(this.props.id) }}>Remove</button>
        </article >
      )
    } else {
      return (
        <article onClick={() => { this.props.toggleDone(this.props.id) }} className="todoItem">
          <h3 className="todoItem__text">{this.props.todoText}</h3>
        </article >
      )
    }
  }
}

export default Todo
