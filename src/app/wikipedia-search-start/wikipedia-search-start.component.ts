import { Component, OnInit } from '@angular/core';
import { FormControl, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'app-wikipedia-search-start',
  templateUrl: 'wikipedia-search-start.component.html',
  styleUrls: ['wikipedia-search-start.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class WikipediaSearchStartComponent implements OnInit {
  private searchResults: string[];
  private term: string;

  constructor(private _jsonp: Jsonp) {}

  ngOnInit() {
  }

  search(term: string){
      this.searchWiki(term)
          .toPromise()
          .then((res) => this.searchResults = res);
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
