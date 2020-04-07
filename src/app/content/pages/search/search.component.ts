import { Component, OnInit } from '@angular/core';
import { ThsrService } from '../../core/service/thsr.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search-block',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  timeTable: any;
  originStationId: '';
  destinationStationId: '';
  trainDate: '';

  stops: any;
  trainNo = '';

  availableSeat: any;
  stationId = '';

  constructor(private thsrService: ThsrService) { }

  ngOnInit(): void { }

  getTimeTableByData() {
    const {originStationId, destinationStationId, trainDate} = this;

    this.thsrService.getTimeTableByData({originStationId, destinationStationId, trainDate})
      .subscribe((data: any) => {
        this.timeTable = {...data};
        console.log(this.timeTable);
    });
  }

  getStopsByTrainNo() {
    this.thsrService.getStopsByTrainNo(this.trainNo)
      .subscribe((data: any) => {
        this.stops = {...data};
        console.log(this.stops);
    });
  }

  getAvailableSeatByStationId() {
    this.thsrService.getAvailableSeatByStationId(this.stationId)
      .subscribe((data: any) => {
        this.availableSeat = {...data};
        console.log(this.availableSeat);
    });
  }
}
