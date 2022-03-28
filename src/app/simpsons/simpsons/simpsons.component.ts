import { Component, OnInit } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character, characterAttributesMapping } from '../character.model';

@Component({
  selector: 'app-simpsons',
  templateUrl: './simpsons.component.html',
  styleUrls: ['./simpsons.component.scss']
})
export class SimpsonsComponent implements OnInit {

  characters$ = new Observable<Character[]>(); 

  constructor(private googleSheetsDbService: GoogleSheetsDbService) { }

  ngOnInit(): void {
    this.characters$ = this.googleSheetsDbService.getActive<Character>(
      environment.characters.spreadsheetId, environment.characters.worksheetName, characterAttributesMapping, 'Active');
  }
}
