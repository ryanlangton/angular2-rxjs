import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import { Promise } from 'es6-promise'

@Injectable()
export class WikipediaService {
  constructor(private _http: Http) {}
  
  public searchObservable(): Observable<any> {
    return this._http.get('https://api.github.com/users');
  }

  public searchPromise(): Promise<any> {
    return this._http.get('https://api.github.com/users').toPromise();
  }  
}

