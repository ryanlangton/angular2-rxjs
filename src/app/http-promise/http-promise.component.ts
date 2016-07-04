import { Component, OnInit } from '@angular/core';
import { GithubUserService } from './../shared/github-user.service'

@Component({
  moduleId: module.id,
  selector: 'app-http-promise',
  templateUrl: 'http-promise.component.html',
  styleUrls: ['http-promise.component.css']
})
export class HttpPromiseComponent implements OnInit {

  constructor(private _gihubUserService: GithubUserService) {}

  ngOnInit() {
  }

}
