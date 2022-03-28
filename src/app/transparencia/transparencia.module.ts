import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentoDetailComponent } from './pagamento-detail/pagamento-detail.component';
import { FornecedoresListComponent } from './fornecedores-list/fornecedores-list.component';



@NgModule({
  declarations: [
    PagamentoDetailComponent,
    FornecedoresListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PagamentoDetailComponent,
    FornecedoresListComponent
  ]

})
export class TransparenciaModule { }
