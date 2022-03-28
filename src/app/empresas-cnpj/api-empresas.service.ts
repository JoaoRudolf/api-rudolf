import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmpresasModel } from './empresas-model';


@Injectable({
  providedIn: 'root'
})
export class ApiEmpresasService {

  constructor(private http: HttpClient) { }

  getEmpresasByCnpj(cnpj:string) {
    const url = `${environment.urlApiEmpresas}/${cnpj}`;
    return this.http.get<EmpresasModel>(url);
  }
}
