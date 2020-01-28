import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './user/auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
     {
       path: '',
       redirectTo: 'login',
       pathMatch: 'full'
      },
      {
        path: 'event',
        canActivate: [AuthGuard],
        loadChildren: () =>
           import('./events/event.module').then(m => m.EventModule)
      },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
