import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import TodoList from './TodoList';
import './reset.css';
import './App.css';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');
  
  const toggleDone = (id) => {
    const newCards = todos.map((todo) => {
      if (todo.id === id) {
        // eslint-disable-next-line no-param-reassign
        todo.done = !todo.done;
        return todo;
      }
      return todo;
    });
    setTodos(newCards);
  };

  const createTodo = (todoText) => {
    if (!todoText) {
      setError('Add a text to your todo');
      return setTimeout(() => setError(''), 3000);
    }

    if (!/\S/.test(todoText)) {
      setError('Todo cannot be spaces');
      return setTimeout(() => setError(''), 3000);
    }

    const newTodo = {
      todoText,
      done: false,
      id: uuidv4(),
    };

    return setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todoItem) => todoItem.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      <Header error={error} createTodo={createTodo} />
      <TodoList
        todos={todos}
        toggleDone={toggleDone}
        deleteTodo={deleteTodo}
      />
    </>
  );
}
