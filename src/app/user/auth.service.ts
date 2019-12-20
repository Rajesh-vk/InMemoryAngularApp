import { Injectable } from '@angular/core';

import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;
  redirectUrl: string;

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  constructor() { }

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
}
