import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickApiService } from '../rick-api.service';
import { Rick } from '../rick-models/rick';

@Component({
  selector: 'app-rick-detail',
  templateUrl: './rick-detail.component.html',
  styleUrls: ['./rick-detail.component.scss']
})
export class RickDetailComponent implements OnInit {

  rickObj: Rick = new Rick({});

  urlSpriteFront: string = "https://rickandmortyapi.com/api/character/avatar";

  constructor(
    private route: ActivatedRoute,
    private rickService: RickApiService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    if (id) {
      this.rickService.geById(id).subscribe((rick) => {
        console.log(rick);
        this.rickObj = rick;
      });
    }
  }

}
