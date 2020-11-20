import { Component, OnInit } from '@angular/core';
import { Todo } from './Models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  todos: Todo[];
  todoText: string;
  nextId: number;

  constructor() {
    this.todos = [];
    this.todoText = '';
    this.nextId = 2;
    this.getTodos();
    this.setNextId();
  }

  ngOnInit(): void {
    this.getTodos();
  }

  setNextId() {
    if (this.todos.length < 1) {
      return this.nextId = 1;
    }

    const nextId = Math.max.apply(Math, this.todos.map((o) => o.id)) + 1

    return this.nextId = nextId
  }

  saveTodos(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  
  getTodos(): void {
    const savedTodosString = localStorage.getItem('todos');
    if (!savedTodosString) return;
    const newTodos = JSON.parse(savedTodosString);
    this.todos = newTodos;
  }

  addTodo(): void {
    if (this.todoText === '') return;
    this.todos.push({
      id: this.nextId,
      text: this.todoText,
      isDone: false,
    })
    this.nextId++;
    this.todoText = '';
    this.saveTodos();
  }

  toggleTodoisDone(todoItem: Todo) {
    todoItem.isDone = !todoItem.isDone;
    this.saveTodos();
  }

  recieveDeleteEvent(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.saveTodos();
  }
}
