import { EmpresasCnpjModule } from './empresas-cnpj/empresas-cnpj.module';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { FrameModule } from './frame/frame.module';
import { InfoCidadesModule } from './info-cidades/info-cidades.module';
import { SimpsonsModule } from './simpsons/simpsons.module';
import { RickModule } from './rick/rick.module';
import { CalendarioModule } from './calendario/calendario.module';

import { AppComponent } from './app.component';

import { TransparenciaModule } from './transparencia/transparencia.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule, // Exports all the basic Angular directives and pipes, such as NgIf, NgForOf, DecimalPipe, and so on
    FormsModule, //esse cara é importante: Exports the required providers and directives for template-driven forms, making them available for import
    HttpClientModule,  //esse cara é importante: Configures the dependency injector for HttpClient with supporting services for XSRF. Automatically imported by HttpClientModule
    NgbModule, // angular bootstrap

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    InfoCidadesModule, // módulo feito por mim, contendo o componente cidades
    FrameModule, // módulo feito por mim, contento header, footer, home e content
    SimpsonsModule,
    RickModule,
    CalendarioModule,
    EmpresasCnpjModule,
    TransparenciaModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
