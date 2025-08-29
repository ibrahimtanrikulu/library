import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms'; import { ChunkPipe } from 'src/app/Pipe/chunk.pipe';
import { ButtonComponent } from '../button/button.component';
import { CalendarDay } from 'src/app/Class/CalendarDay';
;

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ChunkPipe, 
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CalenderComponent implements ControlValueAccessor, OnInit {
  @Input() disabled: boolean = false;
  show = false;

  value: any;

  public calendar: CalendarDay[] = [];
  public monthNames = [
    'Ocak',
    'Subat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ];
  public displayMonth: string = '';
  public displayYears: any;
  private monthIndex: number = 0;

  constructor(@Self() @Optional() private ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this.generateCalendarDays(this.monthIndex);
  }

  generateCalendarDays(monthIndex: number): void {
    this.calendar = [];

    let day: Date = new Date(
      new Date().setMonth(new Date().getMonth() + monthIndex)
    );

    this.displayMonth = this.monthNames[day.getMonth()];
    this.displayYears = day.getFullYear();

    let startingDateOfCalendar = this.getStartDateForCalendar(day);

    let dateToAdd = startingDateOfCalendar;

    for (var i = 0; i < 42; i++) {
      this.calendar.push(new CalendarDay(new Date(dateToAdd)));
      dateToAdd = new Date(dateToAdd.setDate(dateToAdd.getDate() + 1));
    }
  }

  getStartDateForCalendar(selectedDate: Date) {
    let lastDayOfPreviousMonth = new Date(selectedDate.setDate(0));
    let startingDateOfCalendar: Date = lastDayOfPreviousMonth;
    if (startingDateOfCalendar.getDay() != 1) {
      do {
        startingDateOfCalendar = new Date(
          startingDateOfCalendar.setDate(startingDateOfCalendar.getDate() - 1)
        );
      } while (startingDateOfCalendar.getDay() != 1);
    }

    return startingDateOfCalendar;
  }

  public increaseMonth() {
    this.monthIndex++;
    this.generateCalendarDays(this.monthIndex);
  }

  public decreaseMonth() {
    this.monthIndex--;
    this.generateCalendarDays(this.monthIndex);
  }

  public setCurrentMonth() {
    this.monthIndex = 0;
    this.generateCalendarDays(this.monthIndex);
  }

  selectedDate(e: any) {
    this.value = e.date;
    this.show = false;
  }

  // custom form control
  writeValue(value: any): void {
    this.value = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange(e: any) { }
  onTouched() { }
}
