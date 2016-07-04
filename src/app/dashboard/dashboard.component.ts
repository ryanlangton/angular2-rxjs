import { Component, OnInit } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router'
import { MdButton } from '@angular2-material/button/button'
import { MdIcon } from '@angular2-material/icon/icon'
import { MD_CARD_DIRECTIVES } from '@angular2-material/card/card'

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [ ROUTER_DIRECTIVES, MD_CARD_DIRECTIVES, MdButton, MdIcon ]
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
