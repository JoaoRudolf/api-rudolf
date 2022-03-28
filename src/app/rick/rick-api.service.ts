import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Rick } from './rick-models/rick';
import { RickList } from './rick-models/rick-list';


@Injectable({
  providedIn: 'root'
})
export class RickApiService {
  constructor(private http: HttpClient) { }

  getListPokemons(next?:string, offset:number = 0, limit: number = 0) {
    let url:string = `${environment.urlApiRick}/character`;

    // if(next) {
    //   url = next;
    // }

    // if(!(offset == 0 && limit == 0)) {
    //   url += `?offset=${offset}&limit=${limit}`;
    // }

    return this.http.get<RickList>(url);
  }

  geById(Id: string) {
    let url:string = `${environment.urlApiRick}/character/${Id}/`;

    return this.http.get<Rick>(url);

  }
}
