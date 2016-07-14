import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx'

@Injectable()
export class GithubUserService {
  constructor(private _http: Http) { }

  public getUsers(): Observable<Array<User>> {
    return this._http.get('https://api.github.com/users')
      .map((res) => res.json()) // |[1,2,3,4,5]|
      .flatMap((user) => user)  // |12345]
      .map((user: any) => {
        return {
          Login: user.login,
          ReposUrl: user.repos_url,
          AvatarUrl: user.avatar_url
      }})
      .toArray();               // |[a,b,c,d,e]|
  }

  public getByUrl(url: string): Observable<any> {
    return this._http.get(url)
      .map((res) => res.json());
  }
}

export class User {
  public Login: string;
  public ReposUrl: string;
  public AvatarUrl: string;
}

