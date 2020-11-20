import { Component, Input } from '@angular/core';
import { Todo } from '../../Models';

@Component({
  selector: 'app-todo-input',
  template: `
    <div class="Todo__input">
      <input 
        [(ngModel)]="todoText" 
        (keyup.enter)="addTodo()"
        type="text"
        class="Todo__inputField"
        Placeholder="Write todo here..." 
      >
      <button 
        (click)="addTodo()"
        class="Todo__inputButton"
      >
       <img 
        class="Todo__inputButtonIcon icon--invert"
        src="assets/add-circle.svg" 
        heigth="32px" 
        width="32px"
      > 
        Add todo
      </button>
    </div>
  `,
  styles: [
  ]
})
export class TodoInputComponent {
  @Input() todoText!: string;
  @Input() nextId!: number;
  @Input() todos!: Todo[];
  @Input() addTodo!: () => void;
  @Input() saveTodos!: () => void;

  constructor() {
    this.todoText = '';
  }
}
