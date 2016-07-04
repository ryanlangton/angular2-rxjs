import { Component, OnInit } from '@angular/core'
import { GithubUserService } from './../shared/github-user.service'
import { MdButton } from '@angular2-material/button/button'
import { MD_LIST_DIRECTIVES } from '@angular2-material/list/list'
import { MdIcon } from '@angular2-material/icon/icon'
import { Observable } from 'rxjs/Rx'

@Component({
  moduleId: module.id,
  selector: 'app-http-rxjs',
  templateUrl: 'http-rxjs.component.html',
  styleUrls: ['http-rxjs.component.css'],
  directives: [MD_LIST_DIRECTIVES, MdButton, MdIcon]
})
export class HttpRxjsComponent implements OnInit {
  private users$: Observable<any[]>

  constructor(private _gihubUserService: GithubUserService) {}

  ngOnInit() {
      this.users$ = this._gihubUserService.getUsersObservable()
            .map((res) => res.json())
            .do((users) => console.log(users))
            // .map((users) => {
            //   return users.map((user) => {
            //     user.followers$ = this._githubUserService.getFollowersObservable(user.followers_url)
            //       .map((res: Result) => res.json());
            //   })
            // })
            // .flatMap((users) => 
            //   this._githubUserService.getFollowersObservable()
            //       .map((followers)=> followers.json())
            //     );
            // .do((res) => console.log(res));
            // .map((res) => {
            //   return res.map((x) => {
            //     x.followerCount = 20;
            //     return x;
            //   })
            // });
  }
}
