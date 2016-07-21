import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx'

@Injectable()
export class GithubUserService {
  constructor(private _http: Http) { }

  private _githubUsersUrl = 'https://api.github.com/users';

  public getUsers(): Observable<User[]> {         
    return this._http.get(this._githubUsersUrl)  
                    .map((res) => res.json());   
  }

  public getUsersWithRepos(minimumRepos: number): Observable<User[]> {
    return this._http.get(this._githubUsersUrl)     // |X|  -- string of users
                    .map((res) => res.json())       // |[1,2,3,4,5]|  -- map to object array
                    .flatMap((user) => user)        // |-1-2-3-4-5|   -- change array to stream
                    .flatMap(                       // |-a-b-c-d-e|   -- make inner html call for repos
                      (e: User) => this._http.get(e.repos_url).map((res) => res.json()),  
                      (e: User, res: User[]) => Object.assign(e, {repos: res}))
                    .filter((user: User) => user.repos_url.length >= minimumRepos)
                    .toArray();               
  }
}

export class User {
  public login: string;
  public repos_url: string;
  public avatar_url: string;
  public repos: any[];
}

