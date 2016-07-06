import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import { Promise } from 'es6-promise'

@Injectable()
export class GithubUserService {
  constructor(private _http: Http) {}
  
  public getUsersObservable(): Observable<any> {
    return this._http.get('https://api.github.com/users');
  }

  public getUsersPromise(): Promise<any> {
    return this._http.get('https://api.github.com/users').toPromise();
  }  

  public getObservableByUrl(url: string): Observable<any> {
    return this._http.get(url);
  }

  public getPromiseByUrl(url: string): Promise<any> {
    return this._http.get(url).toPromise();
  }
}