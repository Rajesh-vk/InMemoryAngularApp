import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EventService } from './event.service';
import { EventResolved } from '../Model/eventSummay';
@Injectable({
  providedIn: 'root'
})
export class EventResolver implements Resolve<EventResolved> {

  constructor(private eventService: EventService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<EventResolved> {
    const id = route.paramMap.get('id');
    this.eventService.selectedEventChanged(id);
    return this.eventService.selectedEvent$
      .pipe(
        map(data => ({ event: data })),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.error(message);
          return of({ event: null, error: message });
        })
      );
  }

}
