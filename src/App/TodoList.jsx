import React from 'react'
import Todo from './Todo'
import './TodoList.css'

export default function TodoList ({todos, toggleDone, deleteTodo}) {
  return (
    <section className="TodoList">
      {
        todos.map((todoItem) => {
          if (!todoItem.done) return (
            <Todo
              toggleDone={toggleDone}
              deleteTodo={deleteTodo}
              todoText={todoItem.todoText}
              done={todoItem.done}
              id={todoItem.id}
              key={todoItem.id}
            />
          )
          return undefined;
        })
      }
      {
        todos.map((todoItem) => {
          if (todoItem.done) return (
            <Todo
              toggleDone={toggleDone}
              deleteTodo={deleteTodo}
              todoText={todoItem.todoText}
              done={todoItem.done}
              id={todoItem.id}
              key={todoItem.id}
            />
          ) 
          return undefined;
        })
      }
    </section>
  )
}
