import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Subject, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageTitle = 'DashBoard';
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();
  eventSummary$ = this.homeService.eventsSummary$
    .pipe(
      catchError(err => {
        this.errorMessageSubject.next(err);
        return EMPTY;
      })
    );
  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

}
