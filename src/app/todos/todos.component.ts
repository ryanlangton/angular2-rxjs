import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'app-todo',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})
export class TodoComponent implements OnInit {
  private todos$: Subject<string>;
  private term: FormControl;

  constructor() {}

  ngOnInit() {
  }
}
