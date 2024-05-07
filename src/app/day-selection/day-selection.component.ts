import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-day-selection',
  standalone: true,
  imports: [],
  templateUrl: './day-selection.component.html',
  styleUrl: './day-selection.component.scss'
})
export class DaySelectionComponent {
  @Output() daySelected = new EventEmitter<string>();

  selectDay(day: string) {
    this.daySelected.emit(day);
  }
}
