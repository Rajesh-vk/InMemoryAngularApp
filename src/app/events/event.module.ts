import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../user/auth.guard';
import { EventsComponent } from './events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventEditInfoComponent } from './event-edit-info/event-edit-info.component';
import { EventEditVolundeersComponent } from './event-edit-volundeers/event-edit-volundeers.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
        {
            path: '',
            component: EventsComponent,
         },
    ])
  ],
  declarations: [
    EventsComponent,
    EventDetailComponent,
    EventEditInfoComponent,
    EventEditVolundeersComponent
  ]
})
export class EventModule { }
