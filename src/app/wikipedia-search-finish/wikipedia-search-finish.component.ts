import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WikipediaService } from './../services';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'app-wikipedia-search-finish',
  templateUrl: 'wikipedia-search-finish.component.html',
  styleUrls: ['wikipedia-search-finish.component.css']
})
export class WikipediaSearchFinishComponent implements OnInit {
  private searchResults: Observable<string[]>;
  private term: FormControl;

  constructor(private _wikipediaService: WikipediaService) {}

  ngOnInit() {
    this.term = new FormControl();
    this.searchResults = this.term.valueChanges
             .debounceTime(400)        
             .distinctUntilChanged()   
             .flatMap(term => this._wikipediaService.search(term));
  }
}
