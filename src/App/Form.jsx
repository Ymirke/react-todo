import React, { useState } from 'react';
import './Form.css';

export default function Form({ createTodo, error }) {
  const [todoText, setTodoText] = useState('');

  const handleChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo(todoText);
    setTodoText('');
  };

  const randomTodos = ['Do the dishes...', 'Clean the house...', 'Buy milk...', 'Add todos to the list...']

  const pickARandomTodo = (arr) => arr[Math.floor(Math.random() * (arr.length))];

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        className="todoForm__field"
        placeholder={pickARandomTodo(randomTodos)}
        type="text"
        value={todoText}
        onChange={handleChange}
      />
      <input className="todoForm__button" type="submit" value="Create todo" />
      {error ?
      <p className="todoForm__errorDisplay">{error}</p>
      : null}
    </form>
  );
}
