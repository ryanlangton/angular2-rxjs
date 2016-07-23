import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { TodosStore } from './todos.store';
import { TodoListComponent } from './../todo-list';

@Component({
  moduleId: module.id,
  selector: 'app-todos-custom-page',
  templateUrl: 'todos-custom-page.component.html',
  styleUrls: ['todos-custom-page.component.css'],
  directives: [TodoListComponent],
  providers: [TodosStore]
})
export class TodosCustomPageComponent implements OnInit {
  private todos$: Observable<string[]>;

  constructor(private _todosStore: TodosStore) {}

  ngOnInit() {
    this.todos$ = this._todosStore.todos$;
  }

  addTodo(todo: string){
    this._todosStore.add(todo);
  }

  deleteTodo(todo: string){
    this._todosStore.remove(todo);
  }
}
