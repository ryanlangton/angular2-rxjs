import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MdButton } from '@angular2-material/button/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list/list';
import { MdIcon } from '@angular2-material/icon/icon';
import { GithubUserService, User } from './../shared';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/count';

@Component({
  moduleId: module.id,
  selector: 'app-http-rxjs',
  templateUrl: 'http-rxjs.component.html',
  styleUrls: ['http-rxjs.component.css'],
  directives: [MD_LIST_DIRECTIVES, MdButton, MdIcon]
})
export class HttpRxjsComponent implements OnInit {
  private users: Array<User>

  constructor(private _githubUserService: GithubUserService) {}

  ngOnInit() {
      this._githubUserService.getUsers()
            .map((res) => res.sort((a, b) => a.Login.localeCompare(b.Login)))
            .subscribe((users) => this.users = users);
      // this.usersWithRepos$.subscribe(x => this.users = x);
  }

  private filteredUsers$ = this._githubUserService.getUsers()
            .map((res) => res.filter((x) => x.login.startsWith('b')));

  private usersWithRepos$ = this._githubUserService.getUsers()  // |[1,2,3,4,5]|
            .do(x => console.log(x))
            .flatMap(users => users)                            // |12345|
            .do(x => console.log("Flat map users=>users"))
            .do(x => console.log(x))
            .flatMap(                                           // |abcde|
              (e: any) => this._githubUserService.getByUrl(e.repos_url),  
              (e: any, res: any[]) => Object.assign(e, {repos: res}))
            .do(x => console.log("Flat map get repos: "))
            .do(x => console.log(x))
            .toArray();                                                   // |[abcde]|
}