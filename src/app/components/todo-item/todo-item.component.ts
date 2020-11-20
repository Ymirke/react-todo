import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Models';

@Component({
  selector: 'app-todo-item',
  template: `
    <div 
      [ngClass]="setClasses()"
      (click)="emitToggleTodoisDone(todo)"
    >
      <input 
        type="checkbox" 
        [checked]="todo.isDone"
      />
      <li>{{ todo.text }}</li>
      <button 
        *ngIf="todo.isDone" 
        (click)="emitDeleteTodo(todo.id)" 
        class="todo__delete"
      >
      <img 
        class="icon--invert"
        height="16px" 
        width="16px" 
        src="assets/trash.svg" 
        alt="Gylph of trash can - to delete item.">
      </button>
    </div>
  `,
  styles: [
  ]
})
export class TodoItemComponent {
  @Input() todo!: Todo;

  @Output() todoDoneEvent = new EventEmitter<Todo>();
  @Output() deleteEvent = new EventEmitter<number>();

  constructor() {

  }

  emitToggleTodoisDone(todo: Todo): void {
    this.todoDoneEvent.emit(todo)
  }

  emitDeleteTodo(id: number): void {
    this.deleteEvent.emit(id)
  }

  setClasses() {
    return {
      todo: true,
      'todo--isDone': this.todo.isDone,
    }
  }
}
