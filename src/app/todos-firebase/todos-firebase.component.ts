import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { TodoFirebase } from './../services';
import { TodoListComponent } from './../todo-list';

@Component({
  moduleId: module.id,
  selector: 'app-todos-firebase',
  templateUrl: 'todos-firebase.component.html',
  styleUrls: ['todos-firebase.component.css'],
  directives: [TodoListComponent]
})
export class TodosFirebaseComponent implements OnInit {
  private todos$: Observable<string[]>;

  constructor(private _todoFirebase: TodoFirebase) {}

  ngOnInit() {
    this.todos$ = this._todoFirebase.todos$;
  }

  addTodo(todo: string){
    this._todoFirebase.add(todo);
  }

  deleteTodo(todo: string){
    this._todoFirebase.remove(todo);
  }
}
