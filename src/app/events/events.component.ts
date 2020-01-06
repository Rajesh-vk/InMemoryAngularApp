import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { Subject, EMPTY } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  eventSummary$ = this.eventService.eventsSummary$
  .pipe(
    catchError(err => {
      this.errorMessageSubject.next(err);
      return EMPTY;
    })
  );
constructor(private eventService: EventService) { }
  ngOnInit() {
  }

}
