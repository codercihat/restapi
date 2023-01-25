import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { CountriesComponent } from './app.component';

@NgModule({
  declarations: [
    CountriesComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    
   
  ],
  providers: [],
  bootstrap: [CountriesComponent]
})
export class AppModule { }
