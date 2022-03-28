import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasCnpj2Component } from './empresas-cnpj2/empresas-cnpj2.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    EmpresasCnpj2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    EmpresasCnpj2Component
  ]
})
export class EmpresasCnpjModule { }
