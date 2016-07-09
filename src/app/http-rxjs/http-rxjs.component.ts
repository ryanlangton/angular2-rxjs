import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'
import { MdButton } from '@angular2-material/button/button'
import { MD_LIST_DIRECTIVES } from '@angular2-material/list/list'
import { MdIcon } from '@angular2-material/icon/icon'
import { Observable } from 'rxjs/Rx'
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
  private users$: Observable<any[]>

  constructor(private _http: Http) {}

  ngOnInit() {
      this.users$ = this._http.get('https://api.github.com/users')
            .map((res) => res.json())
            .map((res) => res.sort((a, b) => a.login.localeCompare(b.login)));
  }

  private filteredUsers$ = this._http.get('https://api.github.com/users')
            .map((res) => res.json())
            .map((res) => res.filter((x) => x.login.startsWith('b')));

  private usersWithRepos$ = this._http.get('https://api.github.com/users')
            .map((res) => res.json())
            .flatMap(users => users)
            .flatMap(
              (e: any) => this._http.get(e.repos_url)
                .map((repos)=> repos.json()), 
              (e: any, res: any[]) => Object.assign(e, {repos: res}))
            .toArray();
}