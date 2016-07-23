import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, REACTIVE_FORM_DIRECTIVES, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class TodoListComponent implements OnInit {
  @Input() todos: string[];
  @Output() onDeleteTodo: EventEmitter<string> = new EventEmitter<string>();
  @Output() onAddTodo: EventEmitter<string> = new EventEmitter<string>();

  private todo: FormControl;

  constructor() {}

  ngOnInit() {
    this.todo = new FormControl('', Validators.required);
  }

  private addTodo(todo: string){
    this.onAddTodo.next(todo);
    this.todo.updateValue(null);
  }

  private deleteTodo(todo: string){
    this.onDeleteTodo.next(todo);
  }
}
