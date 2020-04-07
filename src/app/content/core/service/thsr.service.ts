import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ThsrService {
  baseUrl = 'https://ptx.transportdata.tw/MOTC/v2/Rail/THSR';
  constructor(private http: HttpClient) { }

  getTimeTableByData(data) {
    return this.http.get(`${this.baseUrl}/DailyTimetable/OD/${data.originStationId}/to/${data.destinationStationId}/${data.trainDate}`);
  }

  getStopsByTrainNo(trainNo) {
    return this.http.get(`${this.baseUrl}/GeneralTimetable/TrainNo/${trainNo}`);
  }

  getAvailableSeatByStationId(stationId) {
    return this.http.get(`${this.baseUrl}/AvailableSeatStatusList/${stationId}`);
  }
}
