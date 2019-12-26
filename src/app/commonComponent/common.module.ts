import { NgModule } from '@angular/core';
import { GridListComponent } from './grid-list/grid-list.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { SharedModule } from '../shared/shared.module';
import {
  MatTableModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatMenuModule,
  MatCardModule,
  MatIconModule

} from '@angular/material';


@NgModule({
  imports: [
    // SharedModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule

  ],
  declarations: [
    GridListComponent,
    GridViewComponent
  ]
})
export class CommonModule { }
