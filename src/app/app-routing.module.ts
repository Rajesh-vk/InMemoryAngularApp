import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
     {
       path: '',
       redirectTo: 'login',
       pathMatch: 'full'
      },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
