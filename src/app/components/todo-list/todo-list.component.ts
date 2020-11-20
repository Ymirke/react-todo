import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Models';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul class="todoList">
      <app-todo-item 
        *ngFor="let todo of todos" 
        (deleteEvent)="emitDeleteEvent($event)"
        (todoDoneEvent)="emitToggleTodoisDone($event)"
        [todo]="todo"
      ></app-todo-item>
    </ul>
  `,
  styles: [
  ]
})
export class TodoListComponent {
  @Input() todos!: Todo[];
  @Input() toggleTodoisDone!: (todoItem: Todo) => void;

  @Output() todoDoneEvent = new EventEmitter<Todo>();
  @Output() deleteEvent = new EventEmitter<number>();

  todoText: string;

  constructor() {
    this.todoText = '';
  }

  emitToggleTodoisDone(todo: Todo): void {
    this.todoDoneEvent.emit(todo)
  }

  emitDeleteEvent(id: number): void {
    this.deleteEvent.emit(id)
  }
}
