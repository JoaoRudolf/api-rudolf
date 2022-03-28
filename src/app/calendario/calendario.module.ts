import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { Calendario2Component } from './calendario2/calendario2.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    Calendario2Component
  ],
  imports: [
    CommonModule,
    FormsModule, //esse cara é importante
    HttpClientModule,  //esse cara é importante
    NgbModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  exports: [
    Calendario2Component
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class CalendarioModule { }
