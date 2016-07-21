import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class TodoStore {     

  private dataStore: {
    todos: string[]
  }
  private _todos$: Subject<string[]>; 
  
  constructor() {
      this._todos$ = new Subject<string[]>();
      this.dataStore = { todos: []};
  }
  
  get todos$(): Observable<string[]> {
    return this._todos$.asObservable();
  }     

  add(todo: string) {
      this.dataStore.todos.push(todo);   
      this._todos$.next(this.dataStore.todos);
  }

  remove(todo: string) {
      var index = this.dataStore.todos.indexOf(todo);
      if (index !== -1) {
          this.dataStore.todos.splice(index, 1);
      }
      this._todos$.next(this.dataStore.todos);
  };
}
