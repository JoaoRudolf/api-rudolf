import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { MunicipiosModel } from './municipios-model';

@Injectable({
  providedIn: 'root'
})
export class ApiIbgeMunicipiosService {

  constructor(private http: HttpClient) { }

  getCidadesByUF(uf:string) {
    const url = `${environment.urlApiCidades}/${uf}/municipios`;
    return this.http.get<MunicipiosModel[]>(url);
  }

  getCidade(id: string) {
    const url = `${environment.urlApiCidadesPorId}/${id}`;
    return this.http.get<MunicipiosModel>(url);
  }
}
