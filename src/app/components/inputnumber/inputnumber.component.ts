import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Self, Optional } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';

/**
 * Inputnumber – A numeric input component with Angular forms support.
 *
 * *Features*
 * - Implements `ControlValueAccessor` so it works with Reactive and Template-driven forms
 * - Supports placeholder text, min/max range, and disabled state
 * - Two-way binding via `ngModel` or `FormControl`
 *
 * @example
 * <!-- Template-Driven Forms -->
 * <app-inputnumber
 *   name="age"
 *   [(ngModel)]="age"
 *   placeholder="Enter age"
 *   [Min]="0"
 *   [Max]="120">
 * </app-inputnumber>
 *
 * @example
 * <!-- Reactive Forms -->
 * <form [formGroup]="form">
 *   <app-inputnumber
 *     formControlName="quantity"
 *     placeholder="Quantity"
 *     [Min]="1"
 *     [Max]="100">
 *   </app-inputnumber>
 * </form>
 */
@Component({
  selector: 'app-inputnumber',
  templateUrl: './inputnumber.component.html',
  styleUrls: ['./inputnumber.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class InputnumberComponent implements ControlValueAccessor, OnInit {
  /** Disables the input when true. */
  @Input() disabled: boolean = false;

  /** Placeholder text displayed when the field is empty. */
  @Input() placeholder: string = '';

  /** Maximum allowed value for the input. */
  @Input() Max: any;

  /** Minimum allowed value for the input. */
  @Input() Min: any;

  /** Current numeric value of the input. */
  value!: number;

  /**
   * Registers this component as a value accessor
   * so it can integrate with Angular forms API.
   */
  constructor(@Self() @Optional() private ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {}

  // ---- ControlValueAccessor ----

  /** Writes an external value into the component. */
  writeValue(value: number): void {
    this.value = value;
  }

  /** Updates the disabled state from parent form control. */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /** Registers a callback to emit value changes. */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /** Registers a callback for when the input is touched. */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /** Emits changes to Angular forms (assigned in registerOnChange). */
  onChange(e: any) {}

  /** Marks the control as touched (assigned in registerOnTouched). */
  onTouched() {}
}