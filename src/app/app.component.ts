import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class CountriesComponent implements OnInit {
  constructor(private http: HttpClient) { }
  countries: any;
 
  currentPage = 1;
  itemsPerPage = 10;
  pages: number[] = [];
 

  ngOnInit(): void {
    this.http.get('https://restcountries.com/v2/all?fields=name,region,area').subscribe(data => {
      this.countries = data;
      this.generatePagesArray();
    });
  }
  generatePagesArray() {
    this.pages = Array.from(Array(Math.ceil(this.countries.length / this.itemsPerPage)), (_, i) => i + 1);
}
}
