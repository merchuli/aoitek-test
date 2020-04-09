import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './content/pages/search/search.component';
import { ThsrService } from './content/core/service/thsr.service';
import { SearchTimeTableComponent } from './content/components/search-time-table/search-time-table.component';
import { SearchStopsComponent } from './content/components/search-stops/search-stops.component';
import { SearchAvailableSeatComponent } from './content/components/search-available-seat/search-available-seat.component';
import { StationSelectorComponent } from './content/components/station-selector/station-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchTimeTableComponent,
    SearchStopsComponent,
    SearchAvailableSeatComponent,
    StationSelectorComponent,
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ThsrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
