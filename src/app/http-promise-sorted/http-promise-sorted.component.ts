import { Component, OnInit } from '@angular/core';
import { GithubUserService } from './../shared/github-user.service'

@Component({
  moduleId: module.id,
  selector: 'app-http-promise-sorted',
  templateUrl: 'http-promise-sorted.component.html',
  styleUrls: ['http-promise-sorted.component.css']
})
export class HttpPromiseSortedComponent implements OnInit {

  constructor(private _gihubUserService: GithubUserService) {}

  ngOnInit() {
  }

}
