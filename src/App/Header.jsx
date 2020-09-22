import React from 'react';
import './Header.css';
import Form from './Form';

export default function Header({ error, createTodo }) {
  return (
    <nav className="header">
      <h1 className="header__headline">
        <a className="header__headlineLink" href="https://github.com/Ymirke/react-todo">React todo</a>
      </h1>
      <Form createTodo={createTodo} error={error} />
    </nav>
  );
}
