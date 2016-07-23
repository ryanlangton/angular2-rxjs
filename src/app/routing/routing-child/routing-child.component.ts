import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-routing-child',
  templateUrl: 'routing-child.component.html',
  styleUrls: ['routing-child.component.css']
})
export class RoutingChildComponent implements OnInit {
  private _childId: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // console.log('ngOnInit() called for child component');
    // this.route.params
    //           .do(x => console.log("Route changed to child ID: " + x['id']))
    //           .subscribe(x => this._childId = x['id']);
  }
}
