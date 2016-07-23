import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MdButton } from '@angular2-material/button/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list/list';
import { MdIcon } from '@angular2-material/icon/icon';
import { Observable } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'app-http-start',
  templateUrl: 'http-start.component.html',
  styleUrls: ['http-start.component.css'],
  directives: [MD_LIST_DIRECTIVES, MdButton, MdIcon]
})
export class HttpStartComponent implements OnInit {
  private users: User[];
  private _githubUsersUrl = 'https://api.github.com/users';

  constructor(private _http: Http) {}

  ngOnInit() {
  }
}

export class User {
  public login: string;
  public repos_url: string;
  public avatar_url: string;
  public repos: any[];
}