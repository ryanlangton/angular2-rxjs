import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class TodoFirebase {
  private _todos: FirebaseListObservable<string[]>;
  
  constructor(private _af: AngularFire){
    this._todos = _af.database.list('/todos');
  }

  get todos$(): Observable<string[]> {
    return this._todos;
  }     

  add(todo: string) {
      this._todos.push(todo);
  }

  remove(todo: string) {
      this._todos.remove(todo);
  };
}
