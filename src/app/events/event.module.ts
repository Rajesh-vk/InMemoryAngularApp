import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../user/auth.guard';
import { EventsComponent } from './events.component';
import { CommonModule } from '../commonComponent/common.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
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
