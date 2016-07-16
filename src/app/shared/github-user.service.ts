import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx'

@Injectable()
export class GithubUserService {
  constructor(private _http: Http) { }

  private _githubUsersUrl = 'https://api.github.com/users';

  public getUsers(): Observable<User> {
    return this._http.get(this._githubUsersUrl) // |X|  -- string of users
                    .map((res) => res.json())   // |[1,2,3,4,5]|  -- map to object array
                    .flatMap((user) => user)    // |-1-2-3-4-5|        -- change array to stream
                    .map((user: any) => {       // |-u1-u2-u3-u4-u5|   -- map to strongly typed User
                      return {
                        Login: user.login,
                        ReposUrl: user.repos_url,
                        AvatarUrl: user.avatar_url,
                        Repos: []
                    }});
  }

  public getUsersWithRepos(minimumRepos: number): Observable<User> {
    return this._http.get(this._githubUsersUrl)     // |X|  -- string of users
                    .map((res) => res.json())               // |[1,2,3,4,5]|  -- map to object array
                    .flatMap((user) => user)                // |-1-2-3-4-5|        -- change array to stream
                    .map((user: any) => {                   // |-u1-u2-u3-u4-u5|   -- map to strongly typed User
                      return {
                        Login: user.login,
                        ReposUrl: user.repos_url,
                        AvatarUrl: user.avatar_url,
                        Repos: []
                    }})
                    .flatMap(                              // |-a-b-c-d-e|       -- make inner html call for repos
                      (e: User) => this._http.get(e.ReposUrl).map((res) => res.json()),  
                      (e: User, res: any[]) => Object.assign(e, {Repos: res}))
                    .filter((user: User) => user.Repos.length >= minimumRepos);
  }
}

export class User {
  public Login: string;
  public ReposUrl: string;
  public AvatarUrl: string;
  public Repos: any[];
}

