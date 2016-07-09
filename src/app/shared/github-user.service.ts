import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx'

@Injectable()
export class GithubUserService {
  constructor(private _http: Http) {}
  
  public getUsers(): Observable<any> {
    return this._http.get('https://api.github.com/users');
  }

  public getByUrl(url: string): Observable<any> {
    return this._http.get(url);
  }
}

