import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

/**
 * Switch – A toggle switch component with Angular forms support.
 *
 * *Features*
 * - Works with Template-Driven and Reactive Forms (via NG_VALUE_ACCESSOR)
 * - Disabled state handling
 * - Customizable input/label styles
 *
 * @example
 * <!-- Template-Driven Forms -->
 * <app-switch
 *   name="notifications"
 *   [(ngModel)]="notifications"
 *   placeholder="Enable notifications">
 * </app-switch>
 *
 * @example
 * <!-- Reactive Forms -->
 * <form [formGroup]="form">
 *   <app-switch
 *     formControlName="darkMode"
 *     placeholder="Dark mode">
 *   </app-switch>
 * </form>
 */
@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true,
    },
  ],
})
export class SwitchComponent {
  /** Disables the switch when true. */
  @Input() disabled: boolean = false;

  /** Optional label text displayed next to the switch. */
  @Input() placeholder: string = '';

  /** Inline style string applied to the switch input element. */
  @Input() styleInput: string = '';

  /** Inline style string applied to the label element. */
  @Input() styleLabel: string = '';

  /** Current checked state (bound by forms). */
  checked: boolean = false;

  /** Function called when the value changes (provided by Angular forms). */
  onChange: any = () => {};

  /** Function called when the control is touched (provided by Angular forms). */
  onTouch: any = () => {};

  constructor() {}

  ngOnInit() {}

  // ---- ControlValueAccessor hooks (registered via NG_VALUE_ACCESSOR) ----

  /** Writes an external value into the component. */
  writeValue(checked: boolean) {
    this.checked = checked;
  }

  /** Updates disabled state from the parent form control. */
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
   * Called on UI toggle.
   * Updates internal state and notifies Angular forms.
   */
  onModelChange(e: boolean) {
    this.checked = e;
    this.onChange(e);
  }
}