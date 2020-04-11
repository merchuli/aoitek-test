import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'thsr-search-time-table',
  templateUrl: './search-time-table.component.html',
  styleUrls: ['./search-time-table.component.scss']
})
export class SearchTimeTableComponent {
  @Output() search: EventEmitter<any> = new EventEmitter();
  originStationId = '';
  destinationStationId = '';
  trainDate = '';

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
