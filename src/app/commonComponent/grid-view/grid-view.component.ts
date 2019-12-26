import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ListColumn } from '../../Model/ListColumn';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
})
export class GridViewComponent implements OnInit , AfterViewInit {
  @Input() name: string;
  @Input() columns: ListColumn[];
  @Input() data: Array<any>;
  public dataSource: MatTableDataSource<any> | null;
  @Output() valueSelected = new EventEmitter();
  @Input() pageSize = 10;
  @Input() enablePagination = true;
  @Input() enableSorting = true;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() hideHeader = false;
  @Output() cellRenderer = new EventEmitter<any>();
  private isInit = true;
  constructor() {}

  ngOnInit() {
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = this.data;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onSelectValue(row) {
    this.valueSelected.emit(row);
  }

  get visibleColumns() {
    return this.columns
      ? this.columns
          .filter((column) => column.visible)
          .map((column) => column.property)
      : [];
  }

  onFilterChange(value) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  onCellRenderer(Element) {
    this.cellRenderer.emit(Element);
  }
}
