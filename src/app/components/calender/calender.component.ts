import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { ChunkPipe } from 'src/app/Pipe/chunk.pipe';
import { CalendarDay } from 'src/app/Class/CalendarDay';

/**
 * Calender – A lightweight date picker component that implements `ControlValueAccessor`.
 *
 * *Features*
 * - Month navigation (previous / next / jump to current)
 * - 6x7 calendar grid (42 cells) starting from Monday
 * - Works with Template-Driven and Reactive Forms (`ngModel`, `formControl`, `formControlName`)
 * - Emits value through CVA (`writeValue`, `registerOnChange`, `registerOnTouched`)
 *
 * *Accessibility*
 * - Uses a popup panel (`show`) to toggle the calendar UI. You may add `aria-` attributes in the template if needed.
 *
 * @example
 * <!-- Template-Driven Forms -->
 * <app-calender name="date" [(ngModel)]="model.date"></app-calender>
 *
 * @example
 * <!-- Reactive Forms -->
 * <form [formGroup]="form">
 *   <app-calender formControlName="date"></app-calender>
 * </form>
 *
 * @example
 * <!-- Readonly / Disabled -->
 * <app-calender [disabled]="true"></app-calender>
 */
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
  standalone: true,
  imports: [CommonModule, ChunkPipe, FormsModule, ReactiveFormsModule],
})
export class CalenderComponent implements ControlValueAccessor, OnInit {
  /** Disables the control and prevents user interaction. */
  @Input() disabled: boolean = false;

  /** Controls calendar popup visibility. */
  show = false;

  /** Current value of the control (selected `Date`). */
  value: any;

  /** Flat list of 42 cells representing the visible month grid. */
  public calendar: CalendarDay[] = [];

  /** Month names used in the header. */
  public monthNames = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December',
  ];

  /** Displayed month label (e.g., "March"). */
  public displayMonth: string = '';

  /** Displayed year (e.g., 2025). */
  public displayYears: any;

  /** Month offset relative to the current month (0 = current). */
  private monthIndex: number = 0;

  /**
   * Injects the current `NgControl` so this component can register itself
   * as the value accessor for Angular forms.
   */
  constructor(@Self() @Optional() private ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  /** Initializes the calendar grid for the initial month. */
  ngOnInit(): void {
    this.generateCalendarDays(this.monthIndex);
  }

  /**
   * Rebuilds the 42-cell calendar for the provided month offset.
   * @param monthIndex Offset from current month (e.g., -1 previous, +1 next)
   */
  generateCalendarDays(monthIndex: number): void {
    this.calendar = [];

    let day: Date = new Date(
      new Date().setMonth(new Date().getMonth() + monthIndex)
    );

    this.displayMonth = this.monthNames[day.getMonth()];
    this.displayYears = day.getFullYear();

    let startingDateOfCalendar = this.getStartDateForCalendar(day);
    let dateToAdd = startingDateOfCalendar;

    for (let i = 0; i < 42; i++) {
      this.calendar.push(new CalendarDay(new Date(dateToAdd)));
      dateToAdd = new Date(dateToAdd.setDate(dateToAdd.getDate() + 1));
    }
  }

  /**
   * Calculates the first visible date of the grid:
   * the Monday of the week that contains the last day of the previous month.
   */
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

  /** Moves to the next month. */
  public increaseMonth() {
    this.monthIndex++;
    this.generateCalendarDays(this.monthIndex);
  }

  /** Moves to the previous month. */
  public decreaseMonth() {
    this.monthIndex--;
    this.generateCalendarDays(this.monthIndex);
  }

  /** Jumps back to the current month. */
  public setCurrentMonth() {
    this.monthIndex = 0;
    this.generateCalendarDays(this.monthIndex);
  }

  /**
   * Handles day selection from the grid.
   * @param e An object containing the selected `date` (from `CalendarDay`)
   */
  selectedDate(e: any) {
    this.value = e.date;
    this.onChange?.(this.value);
    this.onTouched?.();
    this.show = false;
  }

  // ---- ControlValueAccessor ----

  /** Writes an external value into the component. */
  writeValue(value: any): void {
    this.value = value;
  }

  /** Updates disabled state from the parent form. */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /** Registers a callback to emit value changes. */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /** Registers a callback for the touched state. */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /** Emits value changes to Angular Forms (assigned via `registerOnChange`). */
  onChange(e: any) {}

  /** Marks control as touched (assigned via `registerOnTouched`). */
  onTouched() {}
}