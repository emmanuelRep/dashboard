import { Component, OnInit } from '@angular/core';
import {Product,TopCustomers} from './top-customers-data';
import { DataService } from '../../../data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-top-customers',
  templateUrl: './top-customers.component.html'
})
export class TopCustomersComponent implements OnInit {
  apiCustomerData: any[] = []
  //topCustomers:Product[];

  /*constructor() {

    this.topCustomers=TopCustomers;
  } */

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData('top-customers-data.json').subscribe(
      (data) => {
        this.apiCustomerData = JSON.parse(data)
      },
      (error) => {
        console.error('Error fetching data:', error)
      }
    )
  }

}
