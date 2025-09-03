import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Self, Optional } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';

/**
 * Inputpassword – A reusable password input component with Angular forms support.
 *
 * *Features*
 * - Implements `ControlValueAccessor` so it works with Reactive and Template-driven forms
 * - Supports placeholder text and disabled state
 * - Two-way binding via `ngModel` or `FormControl`
 *
 * @example
 * <!-- Template-Driven Forms -->
 * <app-inputpassword
 *   name="password"
 *   [(ngModel)]="password"
 *   placeholder="Enter password">
 * </app-inputpassword>
 *
 * @example
 * <!-- Reactive Forms -->
 * <form [formGroup]="form">
 *   <app-inputpassword
 *     formControlName="password"
 *     placeholder="Enter password">
 *   </app-inputpassword>
 * </form>
 */
@Component({
  selector: 'app-inputpassword',
  templateUrl: './inputpassword.component.html',
  styleUrls: ['./inputpassword.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class InputpasswordComponent implements ControlValueAccessor, OnInit {
  /** Disables the input when true. */
  @Input() disabled: boolean = false;

  /** Placeholder text displayed inside the input field. */
  @Input() placeholder: string = '';

  /** Current value of the password field. */
  value: any;

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
  writeValue(value: any): void {
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