import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadesComponent } from './cidades/cidades.component';



@NgModule({
  declarations: [
    CidadesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CidadesComponent
  ]
})
export class InfoCidadesModule { }
