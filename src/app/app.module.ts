import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { CountriesComponent } from './app.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CountriesComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule
    
   
  ],
  providers: [],
  bootstrap: [CountriesComponent]
})
export class AppModule { }
