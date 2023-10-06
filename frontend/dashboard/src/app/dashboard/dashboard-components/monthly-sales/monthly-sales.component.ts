import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../../data.service';
import 'chart.js'
import { Chart } from 'chart.js';

@Component({
  selector: 'app-monthly-sales',
  templateUrl: './monthly-sales.component.html',
  styleUrls: ['./monthly-sales.component.css'],
})
export class MonthlySalesComponent implements OnInit {
  apiMonthlySalesData: any[] = [] //Store api data
  lineChart!: Chart
  barChart!: Chart


  

  constructor(private dataService: DataService) {}

  //Create line chat view
  createLineChart() {
    const ctx = document.getElementById('lineChart') as HTMLCanvasElement;

    const labels = this.apiMonthlySalesData.map((x) => (x.invoice_month))
    const data = this.apiMonthlySalesData.map((y) => parseFloat(y.amount))

    this.lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Sales Trend Per Month Since October 2020',
            data: data,
            borderColor: '#64CCC5',
            backgroundColor: '#64CCC5',
            borderWidth: 2,
            fill: true,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'category',
            //beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          }
        }
      }
    })
  } 

  //Create bar chart
  createBarChart(data2021: number[], data2022: number[]): void {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement

    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: '2021',
            data: data2021,
            backgroundColor: '#64CCC5',
          },
          {
            label: '2022',
            data: data2022,
            backgroundColor: '#176B87',
          }
        ]
      },
      options: {
        scales: {
          x: {
            stacked: false //enable side by side data comparison
          },
          y: {
            beginAtZero: true
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Sales Comparison Per Month'
          }
        }
      }
    })
  }


  //create doughnut chart  
  createDoughnutChart() {
    //Calculating number of sales per year
    const total2020 = this.apiMonthlySalesData
    .filter((value) => value.invoice_year === '2020')
    .reduce((total, value) => total + parseFloat(value.amount), 0);

    const total2021 = this.apiMonthlySalesData
    .filter((value) => value.invoice_year === '2021')
    .reduce((total, value) => total + parseFloat(value.amount), 0);

    const total2022 = this.apiMonthlySalesData
    .filter((value) => value.invoice_year === '2022')
    .reduce((total, value) => total + parseFloat(value.amount), 0);


    const ctx = document.getElementById('doughnutChart') as HTMLCanvasElement

    const data = [total2020, total2021, total2022]
    const labels = ['2020', '2021', '2022']

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: ['#DAFFFB', '#64CCC5', '#176B87'],
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Total Amount of Sales Per Year In USD'
          }
        }
      }
    })
  }




  ngOnInit(): void {
    this.dataService.getData('monthly-sales-data.JSON').subscribe(
      (data) => {
        this.apiMonthlySalesData = JSON.parse(data)

          //Sorting data set by year and month to ensure accurate trends and analysis
          this.apiMonthlySalesData.sort((a, b) => {
            //sort years
            const yearCompare = a.invoice_year.localeCompare(b.invoice_year)
            if(yearCompare !== 0) {
              return yearCompare
            }

            //for similar years, compare months as numbers
            const monthA = parseInt(a.invoice_month, 10)
            const monthB = parseInt(b.invoice_month, 10)

            return monthA - monthB
          })
          //console log to check sorted data set
          console.log(this.apiMonthlySalesData)

          /*Create data visual dashboard*/
          //2021 to 2022 sales chart comparison

          //Get yearly data
          const data2021 = this.apiMonthlySalesData.filter((value) => value.invoice_year === '2021')
          const data2022 = this.apiMonthlySalesData.filter((value) => value.invoice_year === '2022')
          

          //Get monthly sales from each year
          const amount2021 = data2021.map((value) => parseFloat(value.amount))
          const amount2022 = data2022.map((value) => parseFloat(value.amount))

          //create bar chart
          this.createBarChart(amount2021, amount2022)

          //create doughnut
          this.createDoughnutChart()



        //Create sale projection line chart
        this.createLineChart()
      },
      (error) => {
        console.error('Error fetching data:', error)
      }

    )

  }

}

