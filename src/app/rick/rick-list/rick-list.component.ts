import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { RickApiService } from '../rick-api.service';
import { ResponseLink } from '../rick-models/response-link';

@Component({
  selector: 'app-rick-list',
  templateUrl: './rick-list.component.html',
  styleUrls: ['./rick-list.component.scss']
})
export class RickListComponent implements OnInit {

  listRick$ = new Subject<ResponseLink[]>();

  urlSpriteFront: string = "https://rickandmortyapi.com/api/character/avatar";

  constructor(private route: ActivatedRoute,
              private rickService: RickApiService) { }

  ngOnInit(): void {
    this.rickService
        .getListPokemons(undefined, 0, 20)
        .subscribe(
          (response) => {
            this.listRick$.next(response.results);
          }
        );
  }


}
