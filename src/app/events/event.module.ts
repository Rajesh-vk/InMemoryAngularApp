import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../user/auth.guard';
import { EventsComponent } from './events.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
        {
            path: 'event',
            component: EventsComponent,
            canActivate: [AuthGuard]
         },
    ])
  ],
  declarations: [
    EventsComponent
  ]
})
export class EventModule { }
