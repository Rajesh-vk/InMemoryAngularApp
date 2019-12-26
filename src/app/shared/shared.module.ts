import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';
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
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule

  ],
  declarations: [
    StarComponent
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule
  ]
})
export class SharedModule { }
