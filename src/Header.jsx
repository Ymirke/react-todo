import React from 'react';
import './Header.css';
import Form from './Form';

export default function Header({ error, createTodo }) {
  return (
    <>
      <h1 className="header__headline">React todo app:</h1>
      <Form createTodo={createTodo} />
      <p className="header__errorDisplay">{error}</p>
    </>
  );
}
