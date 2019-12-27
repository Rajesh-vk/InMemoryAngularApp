import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
imports { InMemoryWebApiModule}  from 'angular-in-memory-web-api'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found.component';

/* Feature Modules */
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { GridListComponent } from './commonComponent/grid-list/grid-list.component';
import { GridViewComponent } from './commonComponent/grid-view/grid-view.component';
import { CommonModule } from '@angular/common';
import {AppData} from './app-data'


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(AppData,{delay:1000}),
    UserModule,
    AppRoutingModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
