import { PagamentoDetailComponent } from './transparencia/pagamento-detail/pagamento-detail.component';
import { EmpresasCnpj2Component } from './empresas-cnpj/empresas-cnpj2/empresas-cnpj2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './frame/home/home.component';

import { CidadesComponent } from './info-cidades/cidades/cidades.component';
import { SimpsonsComponent } from './simpsons/simpsons/simpsons.component';
import { RickListComponent } from './rick/rick-list/rick-list.component';
import { RickDetailComponent } from './rick/rick-detail/rick-detail.component';
import { Calendario2Component } from './calendario/calendario2/calendario2.component';
import { FornecedoresListComponent } from './transparencia/fornecedores-list/fornecedores-list.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cidades', component: CidadesComponent},
  { path: 'csimpsons', component: SimpsonsComponent},
  { path: 'empresas-por-cnpj', component: EmpresasCnpj2Component},
  { path: 'fornecedores', component: FornecedoresListComponent},
  { path: 'pagamentos-detalhe', component: PagamentoDetailComponent},
  { path: 'rick', component: RickListComponent},
  { path: 'rick/:id', component: RickDetailComponent},
  { path: 'calendario', component: Calendario2Component},
  { path: 'simpsons', component: SimpsonsComponent},


  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
