
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FornecedorList } from '../models/fornecedores/fornecedor-list';

// import { Pokemon } from '../models/pokemon/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ApiFornecedoresService {

  constructor(private http: HttpClient) { }

  // next?:string, offset:number = 0, limit: number = 0   >> tirei esses parâmetros
  getListFornecedores() {
    // let url:string = `${environment.urlApiFornecedores}1842021&co_uasg=153163`;
    let url:string = `https://api.portaldatransparencia.gov.br/api-de-dados/despesas/documentos-por-favorecido?ano=2022&codigoPessoa=13338681000144&fase=1&pagina=1&ug=153163`;
    const headers = new HttpHeaders({
      'chave-api-dados': 'bcba9f4edd3597e3b6937b1bdfc76ccc'
    });
    // if(next) {
    //   url = next;
    // }

    // if(!(offset == 0 && limit == 0)) {
    //   url += `?offset=${offset}&limit=${limit}`;
    // }

    return this.http.get<FornecedorList[]>(url, {headers: headers});
  }

  // getPokemonByNameOrId(nameOrId: string) {
  //   let url:string = `${environment.urlPokeApiBase}/pokemon/${nameOrId}/`;

  //   return this.http.get<Pokemon>(url);

  // }
}
