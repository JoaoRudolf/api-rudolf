import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Pagamentos } from '../models/pagamentos/pagamentos';
import { ApiPagamentosService } from '../services/api-pagamentos.service';

@Component({
  selector: 'app-pagamento-detail',
  templateUrl: './pagamento-detail.component.html',
  styleUrls: ['./pagamento-detail.component.scss']
})
export class PagamentoDetailComponent implements OnInit {

  pagamentoObj = new Pagamentos({});
  pagamento$ = new Observable<Pagamentos>();
  // pagamento: Pagamentos = {};


  constructor(
    private route: ActivatedRoute,
    private pagamentosService: ApiPagamentosService
  ) {}

  ngOnInit(): void {
    this.pagamentosService.getPagamentos().subscribe(
      (response) => {
        console.log(response);
        this.pagamentoObj = response;
        console.log(this.pagamentoObj.data)
      }
      );
      console.log('a');
      
    // let doc = this.route.snapshot.paramMap.get('data');
    // console.log(doc);

    // if (doc) {
    //   console.log("data")
    //   this.pagamentosService.getPagamentosByDocumentos(doc).subscribe((pagamento) => {
    //     console.log(pagamento);
    //     this.pagamentoObj = pagamento;
    //   });
    // }


  }
}
