import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'thsr-search-available-seat',
  templateUrl: './search-available-seat.component.html',
  styleUrls: ['./search-available-seat.component.scss']
})
export class SearchAvailableSeatComponent {
  @Output() search: EventEmitter<any> = new EventEmitter();
  stationId = '';

  changeId(id) {
    this.stationId = id;
  }

  searchAvailableSeat() {
    this.search.emit(this.stationId);
  }
}
