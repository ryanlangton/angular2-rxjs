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

  public getFollowersObservable(followersUrl: string): Observable<any> {
    return this._http.get(followersUrl);
  }

  public getFollowersPromise(followersUrl: string): Promise<any> {
    return this._http.get(followersUrl).toPromise();
  }
}