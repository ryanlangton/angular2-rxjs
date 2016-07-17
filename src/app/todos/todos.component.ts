import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'app-todo',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})
export class TodoComponent implements OnInit {
  private todos$: Observable<string[]>;
  private todo: FormControl;

  constructor() {}

  ngOnInit() {
    this.todos$ = new Observable<string[]>();
    this.todo = new FormControl('', Validators.required);
  }

  addTodo(todo: string){
    
  }
}
