import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../user/auth.guard';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
        {
            path: 'dashBoard',
            component: HomeComponent,
            canActivate: [AuthGuard]
         },
    ])
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
