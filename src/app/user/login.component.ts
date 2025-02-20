import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  errorMessage: string;
  pageTitle = 'Log In';

  constructor(private authService: AuthService,
              private router: Router) { }

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password) 
      if (this.authService.redirectUrl) {
              this.router.navigateByUrl(this.authService.redirectUrl);
            } else {
              this.router.navigate(['/dashBoard']);
            }
          
      //.pipe(first())
      // .subscribe(
      //   data => {
      //     console.log(data);
      //     if (this.authService.redirectUrl) {
      //       this.router.navigateByUrl(this.authService.redirectUrl);
      //     } else {
      //       this.router.navigate(['/dashBoard']);
      //     }
      //   },
      //   error => {
      //     console.log(error);
      //       this.errorMessage = error.status + ' ' + error.statusText;
      //   });;

      // Navigate to the Product List page after log in.
      // if (this.authService.redirectUrl) {
      //   this.router.navigateByUrl(this.authService.redirectUrl);
      // } else {
      //   this.router.navigate(['/dashBoard']);
      // }
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
}
