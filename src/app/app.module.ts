import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './content/pages/search/search.component';
import { ThsrService } from './content/core/service/thsr.service';
import { StationSelectorComponent } from './content/shared/station-selector/station-selector.component';
import { AvailableSeatComponent } from './content/components/available-seat/available-seat.component';
import { SearchAvailableSeatComponent } from './content/components/search-available-seat/search-available-seat.component';
import { SearchStopsComponent } from './content/components/search-stops/search-stops.component';
import { SearchTimeTableComponent } from './content/components/search-time-table/search-time-table.component';
import { StopListComponent } from './content/components/stop-list/stop-list.component';
import { TimeTableComponent } from './content/components/time-table/time-table.component';

@NgModule({
  declarations: [
    AppComponent,
    /** pages */
    SearchComponent,
    /** shared */
    StationSelectorComponent,
    /** components */
    AvailableSeatComponent,
    SearchAvailableSeatComponent,
    SearchStopsComponent,
    SearchTimeTableComponent,
    StopListComponent,
    TimeTableComponent,
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
