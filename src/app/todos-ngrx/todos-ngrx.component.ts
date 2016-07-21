import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { TodoStore } from './../services';
import { TodoListComponent } from './../todo-list';
import { Store } from '@ngrx/store';
import { AppState, ADD_TODO, DELETE_TODO } from './../reducers';

@Component({
  moduleId: module.id,
  selector: 'app-todos-ngrx',
  templateUrl: 'todos-ngrx.component.html',
  styleUrls: ['todos-ngrx.component.css'],
  directives: [TodoListComponent]
})
export class TodosNgrxComponent implements OnInit {
  private todos$: Observable<string[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.todos$ = this.store.select(state => state.todos);
  }

  addTodo(todo: string) {
    this.store.dispatch({ type: ADD_TODO, payload: todo });
  }

  deleteTodo(todo: string){
    this.store.dispatch({ type: DELETE_TODO, payload: todo });
  }
}

