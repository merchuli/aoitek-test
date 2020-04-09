import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThsrService } from '../../core/service/thsr.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'station-selector',
  templateUrl: './station-selector.component.html',
  styleUrls: ['./station-selector.component.scss']
})
export class StationSelectorComponent implements OnInit {
  @Input() selectedId;
  @Output() changeValue: EventEmitter<any> = new EventEmitter();
  selectedStationCtrl;

  stations = [];

  constructor(private thsrService: ThsrService) {
    this.getStations();
  }

  ngOnInit(): void {
    this.selectedStationCtrl = new FormControl(this.selectedId);
    this.onChanges();
  }

  onChanges(): void {
    this.selectedStationCtrl.valueChanges.subscribe(val => {
      this.changeValue.emit(val);
    });
  }

  getStations() {
    this.thsrService.getStations()
      .subscribe((res: any) => {
        this.stations = res.map((item) => {
          return {
            // tslint:disable-next-line:no-string-literal
            name: item.StationName['Zh_tw'],
            id: item.StationID,
          };
        });
    });
  }
}
