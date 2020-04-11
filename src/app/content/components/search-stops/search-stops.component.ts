import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'thsr-search-stops',
  templateUrl: './search-stops.component.html',
  styleUrls: ['./search-stops.component.scss']
})
export class SearchStopsComponent implements OnInit {
  @Output() search: EventEmitter<any> = new EventEmitter();
  trainNo = '';
  constructor() { }

  ngOnInit(): void {
  }

  searchStops(){
    this.search.emit(this.trainNo);
  }
}
