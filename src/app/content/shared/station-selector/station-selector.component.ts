import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThsrService } from '../../core/service/thsr.service';

@Component({
  selector: 'thsr-station-selector',
  templateUrl: './station-selector.component.html',
  styleUrls: ['./station-selector.component.scss']
})
export class StationSelectorComponent implements OnInit {
  /** 從外部傳入 selectId */
  @Input() selectedId;
  /** 當 selectedId 有變化時，觸發事件 changeValue */
  @Output() changeValue: EventEmitter<any> = new EventEmitter();
  selectedStationCtrl: FormControl;
  stations = [];

  constructor(private thsrService: ThsrService) {
    this.getStations();
  }

  ngOnInit(): void {
    /** FormControl, Angular 官方用法
     *  Definition: Tracks the value and validation status of an individual form control.
     */
    this.selectedStationCtrl = new FormControl(this.selectedId);

    /** 初始化時綁定監聽事件(selectedId) */
    this.onChanges();
  }

  /** 監聽事件(selectedId)，若改變值則發送事件出去 */
  onChanges(): void {
    this.selectedStationCtrl.valueChanges.subscribe(val => {
      this.changeValue.emit(val);
    });
  }

  /** 取得高鐵所有車站資料 */
  getStations() {
    const lang = 'Zh_tw';

    this.thsrService.getStations()
      .subscribe((res: any) => {
        this.stations = res.map((item) => {
          return {
            name: item.StationName[lang],
            id: item.StationID,
          };
        });
    });
  }
}
