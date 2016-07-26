import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { TodoListFirebaseComponent } from './../todo-list-firebase';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as _ from 'lodash';

@Component({
  moduleId: module.id,
  selector: 'app-todos-firebase-page',
  templateUrl: 'todos-firebase-page.component.html',
  styleUrls: ['todos-firebase-page.component.css'],
  directives: [TodoListFirebaseComponent]
})
export class TodosFirebasePageComponent implements OnInit {
  private todos$: Observable<Todo[]>;
  private firebaseTodos: FirebaseListObservable<string[]>

  constructor(private _af: AngularFire) {}

  ngOnInit() {
    this.firebaseTodos = this._af.database.list('/todos');
    this.todos$ = this.firebaseTodos
        .map((x: any[]) => _.map(x, (y) => { return {key: y.$key, value: y.$value }}));
  }

  addTodo(todo: string){
    this.firebaseTodos.push(todo);
  }

  deleteTodo(key: string){
    this.firebaseTodos.remove(key);
  }
}

export class Todo {
  key: string;
  value: string;
}
