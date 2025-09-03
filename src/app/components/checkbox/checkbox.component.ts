import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

/**
 * Checkbox – A reusable checkbox component with form control support.
 *
 * *Features*
 * - Implements `ControlValueAccessor` so it works with Angular forms
 * - Supports both Template-Driven and Reactive Forms
 * - Customizable styles for input and label
 * - Disabled state handling
 *
 * @example
 * <!-- Template-Driven Forms -->
 * <app-checkbox
 *   name="terms"
 *   [(ngModel)]="model.terms"
 *   placeholder="Accept terms"
 * ></app-checkbox>
 *
 * @example
 * <!-- Reactive Forms -->
 * <form [formGroup]="form">
 *   <app-checkbox
 *     formControlName="subscribe"
 *     placeholder="Subscribe to newsletter"
 *   ></app-checkbox>
 * </form>
 */
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor, OnInit {
  /** Disables the checkbox when true. */
  @Input() disabled: boolean = false;

  /** Label text shown next to the checkbox. */
  @Input() placeholder: string = '';

  /** CSS style string applied to the checkbox input element. */
  @Input() styleInput: string = '';

  /** CSS style string applied to the label element. */
  @Input() styleLabel: string = '';

  /** Current checked state of the checkbox. */
  @Input() checked: boolean = false;

  /** Function called when the value changes (provided by Angular forms). */
  onChange: any = () => {};

  /** Function called when the control is touched (provided by Angular forms). */
  onTouch: any = () => {};

  constructor() {}

  ngOnInit() {}

  // ---- ControlValueAccessor ----

  /** Writes an external value into the component (from form control). */
  writeValue(checked: boolean) {
    this.checked = checked;
  }

  /** Updates disabled state from parent form control. */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /** Registers a callback to emit value changes. */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /** Registers a callback for the touched state. */
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  /**
   * Called on checkbox state change.
   * Updates internal state and notifies Angular forms.
   */
  onModelChange(e: boolean) {
    this.checked = e;
    this.onChange(e);
  }
}