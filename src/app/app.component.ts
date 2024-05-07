import { Component } from '@angular/core';
import { DaySelectionComponent } from './day-selection/day-selection.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DaySelectionComponent, CalendarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  daySelected: string = '';

  onDaySelected(day: string) {
    this.daySelected = day;
  }
}
