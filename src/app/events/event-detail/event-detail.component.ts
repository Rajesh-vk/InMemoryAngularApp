import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
 id: string;
 pageTitle = 'Product Detail';
 selectedEvent$ = this.eventService.selectedEvent$;
  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
     this.route.paramMap.subscribe(param => {this.id = param.get('id'); }
      );
     this.eventService.selectedEventChanged(this.id);
  }

}
