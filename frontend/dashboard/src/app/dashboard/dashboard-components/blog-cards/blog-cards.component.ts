import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import { json } from 'stream/consumers';


@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html'
})
export class BlogCardsComponent implements OnInit {
  apiCardData: any[] = []; //variable for holding the api data
  

  constructor(private dataService: DataService) {}

  

  ngOnInit(): void {
    //fetch data on component initialization
    this.dataService.getData('blog-cards-data.json').subscribe(

      (data) => {
        
        //console log to check data output
        //console.log(data)

        //parse data as JSON
        this.apiCardData = JSON.parse(data)

        
      },
      (error) => {
        console.error('Error fetching data:', error)
      }

    )
  }


} 
