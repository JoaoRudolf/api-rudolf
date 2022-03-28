import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiIbgeMunicipiosService } from '../api-ibge-municipios.service';
import { MunicipiosModel } from '../municipios-model';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.scss']
})
export class CidadesComponent implements OnInit {

  cidades$ = new Observable<MunicipiosModel[]>();
  cidade$ = new Observable<MunicipiosModel>();
  cidadeObj = new MunicipiosModel({});

  ufs: string[] = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MS',
    'MT',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
]

  constructor(private ibgeService: ApiIbgeMunicipiosService) { }

  ngOnInit(): void {
    // this.loadMunicipiosByUF('SC');

  }

  loadMunicipiosByUF(event: any) {
    const uf = (event.target as HTMLSelectElement).value;
    console.log(uf);
    this.cidades$ = this.ibgeService.getCidadesByUF(uf);
    this.ibgeService
        .getCidadesByUF(uf)
        .subscribe(
          (response) => {
            console.log(response);
          }
          );
  }

  loadMunicipio(event: any) {
    const mun = (event.target as HTMLSelectElement).value;
    console.log(mun);
    this.cidade$ = this.ibgeService.getCidade(mun);
    this.ibgeService
        .getCidade(mun)
        .subscribe(
          (response) => {
            console.log(response);
            this.cidadeObj = response;

          }
          );

  }

}
