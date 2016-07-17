import { Injectable } from '@angular/core';
import { Http, Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class WikipediaService {
  constructor(private _jsonp: Jsonp) {}
  
  public search(term: string): Observable<string[]> {
    var params = new URLSearchParams();
    params.set('action', 'opensearch');
    params.set('search', term);
    params.set('format', 'json');
    return this._jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search: params })
                      .map((res) => res.json()[1]);
  }
}

