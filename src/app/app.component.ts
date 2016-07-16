import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router'
import { Dir } from '@angular2-material/core/rtl/dir'
import { MdButton } from '@angular2-material/button/button'
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav/sidenav'
import { MD_LIST_DIRECTIVES } from '@angular2-material/list/list'
import { MdIcon } from '@angular2-material/icon/icon'
import { MdToolbar } from '@angular2-material/toolbar/toolbar'
import { DashboardComponent } from './dashboard'
import { GithubUserService, WikipediaService } from './services'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES, 
    Dir,
    MdButton,
    MdIcon,
    MdToolbar,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    DashboardComponent],
  providers: [
    GithubUserService,
    WikipediaService
  ]
})
export class AppComponent {
  title = 'Reactive programming with Angular2 and RxJS';
}
