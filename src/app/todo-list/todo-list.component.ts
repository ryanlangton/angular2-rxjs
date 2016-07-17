import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
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
}
