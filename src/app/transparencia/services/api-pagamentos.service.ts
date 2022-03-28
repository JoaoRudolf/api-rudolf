import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pagamentos } from '../models/pagamentos/pagamentos';




@Injectable({
  providedIn: 'root'
})
export class ApiPagamentosService {

  constructor(private http: HttpClient) { }

  getPagamentos() {
    // let url:string = `${environment.urlApiFornecedores}1842021&co_uasg=153163`;
    let url:string = `https://api.portaldatransparencia.gov.br/api-de-dados/despesas/documentos/153163152372022OB800153`;
    const headers = new HttpHeaders({
      'chave-api-dados': 'bcba9f4edd3597e3b6937b1bdfc76ccc'
    });
    return this.http.get<Pagamentos>(url, {headers: headers});
  }


  getPagamentosByCNPJ(cnpj: string) {
    console.log('url');
    let url:string = `${environment.urlApiPagamentos}/${cnpj}/&fase=3&pagina=1&ug=153163`;
    const headers = new HttpHeaders({
      'chave-api-dados': 'bcba9f4edd3597e3b6937b1bdfc76ccc'
    });

    return this.http.get<Pagamentos>(url,  {headers: headers} );

  }
}
