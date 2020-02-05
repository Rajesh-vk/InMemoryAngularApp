import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, combineLatest, EMPTY, from, merge, Subject, throwError, of, Observable } from 'rxjs';
import { catchError, filter, map, mergeMap, scan, shareReplay, tap, toArray, switchMap } from 'rxjs/operators';
import { EventSummary } from '../Model/eventSummay';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsSummaryUrl = 'api/eventSummarys';

  eventsSummary$ = this.httpUrl.get<EventSummary[]>(this.eventsSummaryUrl)
    .pipe(
      catchError(this.handleError),
      shareReplay(1)
    );

  private eventSelectedSubject = new BehaviorSubject<string>('0');
  eventSelectedAction$ = this.eventSelectedSubject.asObservable();

  selectedEvent$ = combineLatest([
    this.eventsSummary$,
    this.eventSelectedAction$
  ]).pipe(
    map(([events, selectedEventId]) =>
    events.find(event => event.id === selectedEventId)
    ),

    shareReplay(1)
  );

  constructor(private httpUrl: HttpClient, ) { }

  selectedEventChanged(selectedEventId: string): void {
    this.eventSelectedSubject.next(selectedEventId);
  }

  getEvent(id: string): Observable<EventSummary> {
    if (id === '0') {
      return of(this.initializeEvent());
    }
    const url = `${this.eventsSummaryUrl}/${id}`;
    return this.httpUrl.get<EventSummary>(url)
      .pipe(
        tap(data => console.log('getEvent: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private initializeEvent(): EventSummary {
    // Return an initialized object
    return {
            id: '0',
            month: null,
            baseLocation: null,
            beneficiaryName: null,
            venueAddress: null,
            councilName: null,
            project: null,
            category: null,
            eventName: null,
            eventDescription: null,
            eventDate: null,
            totalNoVolunteers: null,
            totalVolunteHours: null,
            totalTravelHours: null,
            overallVolunteeringHours: null,
            livesImpacted: null,
            activityType: null,
            status: null,
            pocID: null,
            pocName: null,
            pocContactNumber: null,
    };
  }

  createEventSummary(eventSummary: EventSummary): Observable<EventSummary> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    eventSummary.id = null;
    return this.httpUrl.post<EventSummary>(this.eventsSummaryUrl, eventSummary, { headers })
      .pipe(
        tap(data => console.log('createEventSummary: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteEventSummary(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.eventsSummaryUrl}/${id}`;
    return this.httpUrl.delete<EventSummary>(url, { headers })
      .pipe(
        tap(data => console.log('deleteEventSummary: ' + id)),
        catchError(this.handleError)
      );
  }

  updateEventSummary(eventSummary: EventSummary): Observable<EventSummary> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.eventsSummaryUrl}/${eventSummary.id}`;
    return this.httpUrl.put<EventSummary>(url, eventSummary, { headers })
      .pipe(
        tap(() => console.log('updateEventSummary: ' + eventSummary.id)),
        // Return the EventSummary on an update
        map(() => eventSummary),
        catchError(this.handleError)
      );
  }


  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
