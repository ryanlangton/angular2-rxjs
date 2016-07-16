import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MdButton } from '@angular2-material/button/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list/list';
import { MdIcon } from '@angular2-material/icon/icon';
import { GithubUserService, User } from './../services';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toArray';

@Component({
  moduleId: module.id,
  selector: 'app-http-start',
  templateUrl: 'http-start.component.html',
  styleUrls: ['http-start.component.css'],
  directives: [MD_LIST_DIRECTIVES, MdButton, MdIcon]
})
export class HttpStartComponent implements OnInit {
  private users: User[];

  constructor(private _githubUserService: GithubUserService) {}

  ngOnInit() {
      this._githubUserService.getUsers()
            .toArray()
            .do(x => console.log(x))
            .subscribe((users) => this.users = users);
  }
}