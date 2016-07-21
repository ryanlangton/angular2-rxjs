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
  selector: 'app-http-finish',
  templateUrl: 'http-finish.component.html',
  styleUrls: ['http-finish.component.css'],
  directives: [MD_LIST_DIRECTIVES, MdButton, MdIcon]
})
export class HttpFinishComponent implements OnInit {
  private users: Observable<User[]>

  constructor(private _githubUserService: GithubUserService) {}

  ngOnInit() {
      this.users = this._githubUserService.getUsersWithRepos(10);
  }
}
