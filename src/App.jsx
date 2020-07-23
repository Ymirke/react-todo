import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Header from './Header'
import TodoList from './TodoList'
import './reset.css'
import './App.css'

export default class App extends Component {
  state = {
    error: '',
    todos: [
    ],
  }

  toggleDone = (id) => {
    return this.setState({
      todos: this.state.todos.map(todoItem => {
        if (todoItem.id === id) {
          todoItem.done = !todoItem.done;
          return todoItem
        }
        return todoItem
      })
    })
  }

  createTodo = (todoText) => {
    if (!todoText) {
      this.setState({ error: 'Add a text to your todo' })
      return setTimeout(() => this.setState({ error: '' }), 2000)
    }

    if (!/\S/.test(todoText)) {
      this.setState({ error: 'Todo cannot be space' })
      return setTimeout(() => this.setState({ error: '' }), 2000)
    }

    const newTodo = {
      todoText,
      done: false,
      id: uuidv4(),
    }
    this.setState({ todos: [...this.state.todos, newTodo] })

  }

  deleteTodo = (id) => {
    return this.setState({
      todos: this.state.todos.filter(todoItem => {
        return todoItem.id !== id
      })
    })
  }

  render() {
    return (
      <>
        <Header
          errorDisplay={this.state.error}
          createTodo={this.createTodo}
        />
        <TodoList
          todos={this.state.todos}
          toggleDone={this.toggleDone}
          deleteTodo={this.deleteTodo}
        />
      </>
    )
  }
}
