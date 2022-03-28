import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickListComponent } from './rick-list/rick-list.component';
import { RickDetailComponent } from './rick-detail/rick-detail.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    RickListComponent,
    RickDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule, // esse cara é importante, sem ele não tem como fazer o roteamento
  ],
  exports: [
    RickListComponent,
    RickDetailComponent
  ]
})
export class RickModule { }
