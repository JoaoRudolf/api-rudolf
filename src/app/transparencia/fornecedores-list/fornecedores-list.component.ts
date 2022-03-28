import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { FornecedorList } from '../models/fornecedores/fornecedor-list';
import { ApiFornecedoresService } from '../services/api-fornecedores.service';

@Component({
  selector: 'app-fornecedores-list',
  templateUrl: './fornecedores-list.component.html',
  styleUrls: ['./fornecedores-list.component.scss']
})
export class FornecedoresListComponent implements OnInit {

  listFornecedores$ = new Observable<FornecedorList[]>();



  constructor(private route: ActivatedRoute,
              private fornecedorService: ApiFornecedoresService) { }

  ngOnInit(): void {

    console.log(this.fornecedorService.getListFornecedores());
    // this.listFornecedores$ = this.fornecedorService
    //     .getListFornecedores().subscribe(

    //     );
    //     console.log(this.fornecedorService.getListFornecedores())


  }
}
