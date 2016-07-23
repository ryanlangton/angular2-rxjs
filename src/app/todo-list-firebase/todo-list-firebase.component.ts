import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-todo-list-firebase',
  templateUrl: 'todo-list-firebase.component.html',
  styleUrls: ['todo-list-firebase.component.css']
})
export class TodoListFirebaseComponent implements OnInit {
  @Input() todos: FirebaseObjectObservable<string>;
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

  private deleteTodo(key: string){
    this.onDeleteTodo.next(key);
  }
}
