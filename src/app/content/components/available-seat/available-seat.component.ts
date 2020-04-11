import { Component, Input } from '@angular/core';

@Component({
  selector: 'thsr-available-seat',
  templateUrl: './available-seat.component.html',
  styleUrls: ['./available-seat.component.scss']
})
export class AvailableSeatComponent {
  @Input() availableSeat;
}
