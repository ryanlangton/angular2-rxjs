import { Injectable } from '@angular/core';
import { Http, Jsonp, URLSearchParams } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class TodoStore {      
  
  constructor() {}
  
  private dataStore: {
    todos: string[]
  }
  private todos$: Subject<string[]>;
}



