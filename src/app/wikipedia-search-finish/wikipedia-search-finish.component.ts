import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'app-wikipedia-search-finish',
  templateUrl: 'wikipedia-search-finish.component.html',
  styleUrls: ['wikipedia-search-finish.component.css']
})
export class WikipediaSearchFinishComponent implements OnInit {
  private searchResults: Observable<string[]>;
  private term: FormControl;

  constructor(private _jsonp: Jsonp) {}

  ngOnInit() {
    this.term = new FormControl();
    this.searchResults = this.term.valueChanges
             .debounceTime(400)        
             .distinctUntilChanged()   
             .flatMap(term => this.searchWiki(term));
  }

  // TODO: this would go in a service
  private searchWiki(term: string): Observable<string[]> {
      var params = new URLSearchParams();
      params.set('action', 'opensearch');
      params.set('search', term);
      params.set('format', 'json');
      return this._jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search: params })
                        .map((res) => res.json()[1]);
  }
}
