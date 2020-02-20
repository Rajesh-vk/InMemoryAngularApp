import { Injectable } from '@angular/core';

import { User } from './user';
import { map } from 'rxjs/internal/operators/map';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;
  redirectUrl: string;

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  private loginUrl = 'api/eventSummarys';

  constructor(private httpUrl: HttpClient) { }

  login(userNameLoged: string, password: string): void {
    if (!userNameLoged || !password) {
      return;
    }
    if (userNameLoged === 'admin') {
      this.currentUser = {
        id: 1,
        userName: userNameLoged,
        isAdmin: true
      };
      return;
    }
    this.currentUser = {
      id: 2,
      userName: userNameLoged,
      isAdmin: false
    };
  }

  logout(): void {
    this.currentUser = null;
  }
  login1(username: string, password: string) {
    return this.httpUrl.post<any>(this.loginUrl, { username, password })
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        }));
}

logout1() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}


}
