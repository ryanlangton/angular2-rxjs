import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-routing',
  templateUrl: 'routing.component.html',
  styleUrls: ['routing.component.css']
})
export class RoutingComponent implements OnInit {
  private childId: FormControl;

  constructor(private _router: Router) {}

  ngOnInit() {
    console.log('ngOnInit() called for parent component');
    this.childId = new FormControl();
  }

  private goToChild(){
    this._router.navigate(['/routing', this.childId.value]);
  }
}
