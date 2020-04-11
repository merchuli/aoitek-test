import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'thsr-search-stops',
  templateUrl: './search-stops.component.html',
  styleUrls: ['./search-stops.component.scss']
})
export class SearchStopsComponent {
  @Output() search: EventEmitter<any> = new EventEmitter();
  trainNo = '';

  searchStops(){
    this.search.emit(this.trainNo);
  }
}
