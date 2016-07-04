import { Component, OnInit } from '@angular/core'
import { GithubUserService } from './../shared/github-user.service'
import { Observable } from 'rxjs/Rx'
import { MdButton } from '@angular2-material/button/button'
import { MD_LIST_DIRECTIVES } from '@angular2-material/list/list'
import { MdIcon } from '@angular2-material/icon/icon'

@Component({
  moduleId: module.id,
  selector: 'app-http-rxjs',
  templateUrl: 'http-rxjs.component.html',
  styleUrls: ['http-rxjs.component.css'],
  directives: [MD_LIST_DIRECTIVES, MdButton, MdIcon]
})
export class HttpRxjsComponent implements OnInit {
  private users$: Observable<any>

  constructor(private _gihubUserService: GithubUserService) {}

  ngOnInit() {
      this.users$ = this._gihubUserService.getUsersObservable()
            .map((res) => res.json())
            .map((res) => {
              res.followerCount = 20;
              return res;
            });
  }
}
