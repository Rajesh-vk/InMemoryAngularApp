import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../user/auth.guard';
import { EventsComponent } from './events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventEditInfoComponent } from './event-edit-info/event-edit-info.component';
import { EventEditVolundeersComponent } from './event-edit-volundeers/event-edit-volundeers.component';
import { EventEditComponent } from './event-edit/event-edit.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
        {
            path: '',
            component: EventsComponent,
         },
         {
           path: ':id',
           component: EventDetailComponent,
          //  resolve: { resolvedData: ProductResolver }
         },
         {
           path: ':id/edit',
           component: EventEditComponent,
          //  canDeactivate: [ProductEditGuard],
          //  resolve: { resolvedData: ProductResolver },
           children: [
             { path: '', redirectTo: 'info', pathMatch: 'full' },
             { path: 'info', component: EventEditInfoComponent },
             { path: 'volundeers', component: EventEditVolundeersComponent }
           ]
         }
       ])
     ],
  declarations: [
    EventsComponent,
    EventDetailComponent,
    EventEditInfoComponent,
    EventEditVolundeersComponent,
    EventEditComponent
  ]
})
export class EventModule { }
