import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createTodo(this.state.value);
    this.setState({ value: '' })
  }

  randomTodos = ['Do the dishes...', 'Clean the house...', 'Buy milk...', 'Add todos to the list...']

  pickARandomTodo = (arr) => arr[Math.floor(Math.random() * (arr.length))];

  render() {
    return (
      <form className="todoForm" onSubmit={this.handleSubmit} >
        <label>
          <input className="todoForm__field"
            placeholder={this.pickARandomTodo(this.randomTodos)}
            type="text" value={this.state.value}
            onChange={this.handleChange} />
        </label>
        <input className="todoForm__button" type="submit" value="Create todo" />
      </form>
    );
  }
}

export default Form
