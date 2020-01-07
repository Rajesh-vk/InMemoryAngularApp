import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ListColumn } from '../../Model/ListColumn';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss'],
})
export class GridListComponent implements AfterViewInit {
  @Input() name: string;
  @Input() columns: ListColumn[];

  @ViewChild('filter') filter: ElementRef;
  @Output() filterChange = new EventEmitter<string>();

  @Input() hideHeader: boolean;

  constructor() {}

  ngAfterViewInit() {
    if (!this.hideHeader) {
      fromEvent(this.filter.nativeElement, 'keyup')
        .pipe(
          distinctUntilChanged(),
          debounceTime(150)
        )
        .subscribe(() => {
          this.filterChange.emit(this.filter.nativeElement.value);
        });
    }
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }
}
