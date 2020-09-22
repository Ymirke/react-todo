import React from 'react'
import './Todo.css'

export default function Todo ({toggleDone, deleteTodo, todoText, done, id }) {
  if (done) {
    return (
      <article onClick={() => { toggleDone(id) }} className="todoItem todoItem--done">
        <h3 className="todoItem__text">{todoText}</h3>
        <button className="todoItem__deleteButton" onClick={(event) => { 
          event.stopPropagation(); 
          deleteTodo(id);
        }}>Remove</button>
      </article >
    )
  } else {
    return (
      <article onClick={() => { toggleDone(id) }} className="todoItem">
        <h3 className="todoItem__text">{todoText}</h3>
      </article>
    )
  }
}
