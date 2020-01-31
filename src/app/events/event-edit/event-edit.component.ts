import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventSummary } from 'src/app/Model/eventSummay';
import { EventService } from '../event.service';
import { Subject, EMPTY } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {
  pageTitle = 'Event Edit';
  errorMessage: string;

  selectedEvent$ = this.eventService.selectedEvent$
  .pipe(
    tap(data => {
      this.event = data;
      console.log('EventEdit', JSON.stringify(data));
    }),
    catchError(err => {
      this.errorMessageSubject.next(err);
      return EMPTY;
    })
  );
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  private dataIsValid: { [key: string]: boolean } = {};

  get isDirty(): boolean {
    return JSON.stringify(this.originalEvent) !== JSON.stringify(this.currentEvent);
  }

  private currentEvent: EventSummary;
  private originalEvent: EventSummary;

  get event(): EventSummary {
    return this.currentEvent;
  }
  set event(value: EventSummary) {
    this.currentEvent = value;
    // Clone the object to retain a copy
    this.originalEvent = value ? { ...value } : null;
  }

  constructor(private eventService: EventService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.onEventRetrieved();
  }

  onEventRetrieved(): void {
    if (!this.event) {
      this.pageTitle = 'No product found';
    } else {
      if (this.event.id === '0') {
        this.pageTitle = 'Add Product';
      } else {
        this.pageTitle = `Edit Product: ${this.event.eventName}`;
      }
    }
  }

  deleteProduct(): void {
    // if (this.product.id === 0) {
    //   // Don't delete, it was never saved.
    //   this.onSaveComplete();
    // } else {
    //   if (confirm(`Really delete the product: ${this.product.productName}?`)) {
    //     this.productService.deleteProduct(this.product.id).subscribe({
    //       next: () => this.onSaveComplete(),
    //       error: err => this.errorMessage = err
    //     });
    //   }
    // }
  }

  isValid(path?: string): boolean {
    this.validate();
    if (path) {
      return this.dataIsValid[path];
    }
    return (this.dataIsValid &&
      Object.keys(this.dataIsValid).every(d => this.dataIsValid[d] === true));
  }

  reset(): void {
    this.dataIsValid = null;
    this.currentEvent = null;
    this.originalEvent = null;
  }

  saveProduct(): void {
    // if (this.isValid()) {
    //   if (this.product.id === 0) {
    //     this.productService.createProduct(this.product).subscribe({
    //       next: () => this.onSaveComplete(),
    //       error: err => this.errorMessage = err
    //     });
    //   } else {
    //     this.productService.updateProduct(this.product).subscribe({
    //       next: () => this.onSaveComplete(),
    //       error: err => this.errorMessage = err
    //     });
    //   }
    // } else {
    //   this.errorMessage = 'Please correct the validation errors.';
    // }
  }

  onSaveComplete(): void {
    this.reset();
    this.router.navigate(['/event']);
  }

  validate(): void {
    // Clear the validation object
    this.dataIsValid = {};

    // 'info' tab
    // if (this.product.productName &&
    //   this.product.productName.length >= 3 &&
    //   this.product.productCode) {
    //   this.dataIsValid['info'] = true;
    // } else {
    //   this.dataIsValid['info'] = false;
    // }

    // // 'tags' tab
    // if (this.product.category &&
    //   this.product.category.length >= 3) {
    //   this.dataIsValid['tags'] = true;
    // } else {
    //   this.dataIsValid['tags'] = false;
    // }
  }
}
