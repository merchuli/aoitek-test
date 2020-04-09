import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search-available-seat',
  templateUrl: './search-available-seat.component.html',
  styleUrls: ['./search-available-seat.component.scss']
})
export class SearchAvailableSeatComponent implements OnInit {
  @Output() search: EventEmitter<any> = new EventEmitter();
  stationId = '';
  constructor() { }

  ngOnInit(): void {
  }

  changeId(id) {
    this.stationId = id;
  }

  searchAvailableSeat() {
    this.search.emit(this.stationId);
  }
}
