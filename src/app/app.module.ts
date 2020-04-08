import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './content/pages/search/search.component';
import { ThsrService } from './content/core/service/thsr.service';
import { SearchStopsComponent } from './content/components/search-stops/search-stops.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchStopsComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ThsrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
