import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarComponent } from './star.component';
import {
  MatTableModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatMenuModule,
  MatCardModule,
  MatIconModule,
  MatCheckboxModule,
  MatButtonModule
} from '@angular/material';
import { GridListComponent } from './grid-list/grid-list.component';
import { GridViewComponent } from './grid-view/grid-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule

  ],
  declarations: [
    StarComponent,
    GridListComponent,
    GridViewComponent
  ],
  exports: [
    StarComponent,
    GridListComponent,
    GridViewComponent,
    CommonModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class SharedModule { }
