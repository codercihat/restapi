import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class CountriesComponent implements OnInit {
  sortOrder = '';
  sortOption: string = 'asc';
  constructor(private http: HttpClient) { }
  countries: any;
  p:number = 1;
  itemsPerPage:number = 5; 
  TotalProduct:any ;
  ngOnInit(): void {
    this.http.get('https://restcountries.com/v2/all?fields=name,region,area').subscribe(data => {
    this.countries = data;
    this.TotalProduct = this.countries.length;
    });
  }
  sortData(sortOption: string) {
    this.sortOption = sortOption;
    if (sortOption === 'asc') {
      this.countries.sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));
    } else {
      this.countries.sort((a: { name: any; }, b: { name: string; }) => b.name.localeCompare(a.name));
    }
  }
}










