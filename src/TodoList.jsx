import React, { Component } from 'react'
import Todo from './Todo'
import './TodoList.css'

class TodoList extends Component {
  render() {
    return (
      <main className="TodoList">
        {
          this.props.todos.map((todoItem) => {
            if (!todoItem.done) return (
              <Todo
                toggleDone={this.props.toggleDone}
                deleteTodo={this.props.deleteTodo}
                todoText={todoItem.todoText}
                done={todoItem.done}
                id={todoItem.id}
                key={todoItem.id}
              />
            )
            return undefined
          })
        }
        {
          this.props.todos.map((todoItem) => {
            if (todoItem.done) return (<Todo
              toggleDone={this.props.toggleDone}
              deleteTodo={this.props.deleteTodo}
              todoText={todoItem.todoText}
              done={todoItem.done}
              id={todoItem.id}
              key={todoItem.id}
            />)
            return undefined
          })
        }
      </main >
    )
  }
}

export default TodoList
