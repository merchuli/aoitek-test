import { Component, Input } from '@angular/core';

@Component({
  selector: 'thsr-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent {
  @Input() timeTable;
}
