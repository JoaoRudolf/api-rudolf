import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';

import { SimpsonsComponent } from './simpsons/simpsons.component';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    SimpsonsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ],
  exports: [
    SimpsonsComponent
  ],
  providers: [
    {
      provide: API_KEY,
      useValue: environment.googleSheetsApiKey,
    },
    GoogleSheetsDbService
  ],
})
export class SimpsonsModule { }
