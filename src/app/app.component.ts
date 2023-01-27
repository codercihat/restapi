import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class CountriesComponent implements OnInit {
sortOrder = '';
isActive: boolean = false;
sortOption: string = 'asc';
  data: any;
  originalCountries: any;
constructor(private http: HttpClient) { }
countries: any ;
isSortedByArea = false;
 isFiltered = false;
 areaFilter: number = 63000;
p:number = 1;
itemsPerPage:number = 5;
TotalProduct:any ;
isFiltering = false;
isFilteringByRegion = false;
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
changeBackgroundColor(value:string){
  if(value === 'asc'){
    this.sortOption = 'asc'
  }else{
    this.sortOption = 'desc'
  }
}
filterData(filter: boolean) {
  if (filter) {
    this.countries = this.countries.filter((country: { area: number; }) => country.area < 63000);
    this.isFiltered = true;
  } else {
    this.ngOnInit();
    this.isFiltered = false;
  }
}
toggleFilter() {
  this.isFiltering = !this.isFiltering;
  if (this.isFiltering) {
      this.filterData(true);
  } else {
      this.filterData(false);
  }
}
toggleFilterByRegion() {
  this.isFilteringByRegion = !this.isFilteringByRegion;
  if (this.isFilteringByRegion) {
      this.filterDataByRegion('Oceania');
  } else {
      this.filterDataByRegion('');
  }
}

filterDataByRegion(region: string) {
  this.countries = this.countries.filter((country: { region: string; }) => country.region === region);
}
}








