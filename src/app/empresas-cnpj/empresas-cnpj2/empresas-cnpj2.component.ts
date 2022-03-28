import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiEmpresasService } from '../api-empresas.service';
import { EmpresasModel } from '../empresas-model';

@Component({
  selector: 'app-empresas-cnpj2',
  templateUrl: './empresas-cnpj2.component.html',
  styleUrls: ['./empresas-cnpj2.component.scss']
})
export class EmpresasCnpj2Component  {

  formEmpresa: EmpresasModel = {};

  showForm = new Subject<boolean>();

  constructor(private apiEmpresasService: ApiEmpresasService) { }

  getEmpresa(cnpj: FocusEvent) {
    if ((cnpj.target as HTMLInputElement)?.value) {
      let inputCNPJ = (cnpj.target as HTMLInputElement)?.value;
      const cnpjResponse = this.apiEmpresasService.getEmpresasByCnpj(inputCNPJ);

      cnpjResponse.subscribe((empresaModel) => {
        this.formEmpresa = empresaModel;
        this.showForm.next(true);
        console.log(empresaModel);
      });
    }
  }

}
