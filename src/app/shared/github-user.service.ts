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
                    .flatMap((user) => user)    // |12345|        -- change array to stream
                    .map((user: any) => {       // |u1u2u3u4u5|   -- map to strongly typed User
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
            .flatMap((user) => user)                // |12345|        -- change array to stream
            .map((user: any) => {                   // |u1u2u3u4u5|   -- map to strongly typed User
              return {
                Login: user.login,
                ReposUrl: user.repos_url,
                AvatarUrl: user.avatar_url,
                Repos: []
            }})
            .flatMap(                              // |abcde|       -- make inner html call for repos
              (e: any) => this._http.get(e.repos_url).map((res) => res.json()),  
              (e: any, res: any[]) => Object.assign(e, {Repos: res}))
            .filter((user: User) => user.Repos.length >= minimumRepos);
  }
}

export class User {
  public Login: string;
  public ReposUrl: string;
  public AvatarUrl: string;
  public Repos: any[];
}

