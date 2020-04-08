import { Component, OnInit } from '@angular/core';
import { ThsrService } from '../../core/service/thsr.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search-block',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  showTimeTable = false;
  timeTable = [];
  originStationId: '';
  destinationStationId: '';
  trainDate: '';

  stops: any;

  showAvailableSeat = false;
  availableSeat = {text: '', number: 0};

  constructor(private thsrService: ThsrService) { }

  ngOnInit(): void { }

  getTimeTableByData() {
    const {originStationId, destinationStationId, trainDate} = this;

    this.thsrService.getTimeTableByData({originStationId, destinationStationId, trainDate})
      .subscribe((data: any) => {
        for (const item of data) {
          this.timeTable = [...this.timeTable, {
              trainNo: item.DailyTrainInfo.TrainNo,
              originStopDepartureTime: item.OriginStopTime.DepartureTime,
              destinationStopArrivalTime: item.DestinationStopTime.ArrivalTime,
            },
          ];
        }

        this.showTimeTable = true;
    });
  }

  getStopsByTrainNo(trainNo) {
    this.thsrService.getStopsByTrainNo(trainNo)
      .subscribe((data: any) => {
        this.stops = data[0].GeneralTimetable.StopTimes;
    });
  }

  getAvailableSeatByStationId(stationId) {
    this.thsrService.getAvailableSeatByStationId(stationId)
      .subscribe((data: any) => {
        this.availableSeat = {
          text: data.AvailableSeats.length ? '有座位' : '已無任何座位',
          number: data.AvailableSeats.length,
        };
        this.showAvailableSeat = true;
    });
  }
}
