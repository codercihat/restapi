import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class CountriesComponent implements OnInit {
  sortOrder = '';
  constructor(private http: HttpClient) { }
  countries: any;
 p:number = 1;
 itemsPerPage:number = 10; 
TotalProduct:any ;
  ngOnInit(): void {
    this.http.get('https://restcountries.com/v2/all?fields=name,region,area').subscribe(data => {
    this.countries = data;
this.countries.length =this.TotalProduct;
      
      
    });
  }
 
}











