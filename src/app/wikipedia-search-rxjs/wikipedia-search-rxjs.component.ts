import { Component, OnInit } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { FormControl } from '@angular/forms';
import { WikipediaService } from './../shared/wikipedia.service';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'app-wikipedia-search-rxjs',
  templateUrl: 'wikipedia-search-rxjs.component.html',
  styleUrls: ['wikipedia-search-rxjs.component.css']
})
export class WikipediaSearchRxjsComponent implements OnInit {
  private items: Array<string>;
  private term: FormControl;

  constructor(private _wikipediaService: WikipediaService) {}

  ngOnInit() {
    this.term = new FormControl();
    this.term.valueChanges
             .debounceTime(400)        // wait 400ms between searches
             .distinctUntilChanged()   // only search if value is different
             .flatMap(term => this._wikipediaService.search(term))
             .subscribe(items => this.items = items);
  }

  // .flatMap(term => this._wikipediaService.search(term))
  //   .map takes function T->U and returns Observable<U>
  //   .flatMap takes function T->Observable<U> and returns Observable<U>
  // if you see embedded observables such as below you may need .flatMap
  // .subscribe(term => this._wikipediaService.search(term).subscribe(items => this.items = items))

  // more info: http://stackoverflow.com/questions/33471526/why-we-need-to-use-flatmap
}
