import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, combineLatest, EMPTY, from, merge, Subject, throwError, of } from 'rxjs';
import { catchError, filter, map, mergeMap, scan, shareReplay, tap, toArray, switchMap } from 'rxjs/operators';
import { EventSummary } from '../Model/eventSummay';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsSummaryUrl = 'api/eventSummarys';

  eventsSummary$ = this.httpUrl.get<EventSummary[]>(this.eventsSummaryUrl)
    .pipe(
      tap(data => console.log('EventsSummary', JSON.stringify(data))),
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
    events.find(event => event.eventID === selectedEventId)
    ),
    tap(event => console.log('selectedEvent', event)),
    shareReplay(1)
  );

  constructor(private httpUrl: HttpClient, ) { }

  selectedEventChanged(selectedEventId: string): void {
    this.eventSelectedSubject.next(selectedEventId);
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
