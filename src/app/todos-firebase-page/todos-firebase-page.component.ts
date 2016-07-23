import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { TodoListFirebaseComponent } from './../todo-list-firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-todos-firebase-page',
  templateUrl: 'todos-firebase-page.component.html',
  styleUrls: ['todos-firebase-page.component.css'],
  directives: [TodoListFirebaseComponent]
})
export class TodosFirebasePageComponent implements OnInit {
  private todos$: FirebaseListObservable<any[]>;

  constructor(private _af: AngularFire) {}

  ngOnInit() {
    this.todos$ = this._af.database.list('/todos');
  }

  addTodo(todo: string){
    this.todos$.push(todo);
  }

  deleteTodo(key: string){
    this.todos$.remove(key);
  }
}
