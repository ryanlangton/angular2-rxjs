/// <reference path="./../../../typings/globals/lodash/index.d.ts" />

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MdButton } from '@angular2-material/button/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list/list';
import { MdIcon } from '@angular2-material/icon/icon';
import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';

@Component({
  moduleId: module.id,
  selector: 'app-http-finish',
  templateUrl: 'http-finish.component.html',
  styleUrls: ['http-finish.component.css'],
  directives: [MD_LIST_DIRECTIVES, MdButton, MdIcon]
})
export class HttpFinishComponent implements OnInit {
  private _githubUsersUrl = 'https://api.github.com/users';
  private users: Observable<User[]>

  constructor(private _http: Http) {}

  ngOnInit() {
    this.users = this._http.get(this._githubUsersUrl) 
                           .map(res => res.json())
                           .map(users => _.filter(users, (user: User) => user.login.startsWith('m'))); 
  }
}
class User {
  public login: string;
  public repos_url: string;
  public avatar_url: string;
  public repos: any[];
}
