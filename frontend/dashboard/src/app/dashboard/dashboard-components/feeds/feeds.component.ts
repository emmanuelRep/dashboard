import { Component, OnInit } from '@angular/core';
import { Feeds,Feed } from './feeds-data';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html'
})
export class FeedsComponent implements OnInit {
  apiFeedData: any[] = []; //store feed data

  //feeds:Feed[];

  constructor(private dataService: DataService) {}

  /*constructor() {

    this.feeds = Feeds;
  } */

  ngOnInit(): void {
    this.dataService.getData('feeds-data.JSON').subscribe(
      (data) => {
        this.apiFeedData = JSON.parse(data)
      },
      (error) => {
        console.error('Error fetching data', error)
      }
    )
  }

}
