import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search-time-table',
  templateUrl: './search-time-table.component.html',
  styleUrls: ['./search-time-table.component.scss']
})
export class SearchTimeTableComponent implements OnInit {
  @Output() search: EventEmitter<any> = new EventEmitter();
  originStationId = '';
  destinationStationId = '';
  trainDate = '';

  constructor() { }

  ngOnInit(): void {
  }

  searchTimeTable(){
    const {originStationId, destinationStationId, trainDate} = this;

    this.search.emit({originStationId, destinationStationId, trainDate});
  }

  changeOriginId(id) {
    this.originStationId = id;
  }

  changeDestinationId(id) {
    this.destinationStationId = id;
  }
}
