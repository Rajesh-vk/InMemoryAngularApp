import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
 id: string;
 pageTitle = 'Event Detail';
 selectedEvent$ = this.eventService.selectedEvent$;
 private errorMessageSubject = new Subject<string>();
 errorMessage$ = this.errorMessageSubject.asObservable();
  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
     this.route.paramMap.subscribe(param => {this.id = param.get('id'); }
      );
     this.eventService.selectedEventChanged(this.id);
  }

}
