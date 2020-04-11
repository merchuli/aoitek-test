import { Component } from '@angular/core';
import { ThsrService } from '../../core/service/thsr.service';

@Component({
  selector: 'thsr-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  /** variables for time table */
  showTimeTable = false;
  timeTable = [];

  stops: any;

  /** variables for available seat */
  showAvailableSeat = false;
  availableSeat = {text: '', number: 0};

  constructor(private thsrService: ThsrService) { }

  getTimeTableByData(data) {
    this.timeTable = [];
    this.thsrService.getTimeTableByData(data)
      .subscribe((res: any) => {
        for (const item of res) {
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
      .subscribe((res: any) => {
        this.stops = res[0].GeneralTimetable.StopTimes;
    });
  }

  getAvailableSeatByStationId(stationId) {
    this.thsrService.getAvailableSeatByStationId(stationId)
      .subscribe((res: any) => {
        this.availableSeat = {
          text: res.AvailableSeats.length ? '有座位' : '已無任何座位',
          number: res.AvailableSeats.length,
        };
        this.showAvailableSeat = true;
    });
  }
}
