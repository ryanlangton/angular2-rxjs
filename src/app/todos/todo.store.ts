import { Injectable } from '@angular/core';
import { Http, Jsonp, URLSearchParams } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class TodoStore {      
  constructor() {}
  
  private dataStore: {
    todos: string[]
  }
  private _todos$: Subject<string[]>;

  get todos$() {
    return this._todos$.asObservable();
  }     
  addTodo(todo: string) {
      this.dataStore.todos.push(todo);   
      this._todos$.next(this.dataStore.todos);
  }
  removeTodo(todo: string) {
      var index = this.dataStore.todos.indexOf(todo);
      if (index !== -1) {
          this.dataStore.todos.splice(index, 1);
      }
      this._todos$.next(this.dataStore.todos);
  };
}
