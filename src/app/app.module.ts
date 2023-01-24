import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CountriesComponent } from './app.component';

@NgModule({
  declarations: [
    CountriesComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [CountriesComponent]
})
export class AppModule { }
