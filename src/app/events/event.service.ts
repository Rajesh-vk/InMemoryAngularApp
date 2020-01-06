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
      shareReplay(1)
    );

    constructor(private httpUrl: HttpClient, ) { }
}
