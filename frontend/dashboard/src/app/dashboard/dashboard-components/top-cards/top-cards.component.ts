import { Component, OnInit } from '@angular/core';
import {topcard,topcards} from './top-cards-data';
import { DataService } from '../../../data.service';
import { Data } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html'
})
export class TopCardsComponent implements OnInit {
  apiTopCards: any[] = []; //store api data
  //topcards:topcard[];

  /*constructor() { 

    this.topcards=topcards;
  } */

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData('/top-cards/top-cards-data.json').subscribe(
      (data) => {
        this.apiTopCards = JSON.parse(data)
      },

      (error) => {
        console.error('Error fetching data:', error)
      }

    )
  }

}
