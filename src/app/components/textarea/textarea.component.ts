import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Self, Optional } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';

/**
 * Textarea – A reusable multi-line text input component with Angular forms support.
 *
 * *Features*
 * - Implements `ControlValueAccessor` so it works with both Reactive and Template-driven forms
 * - Supports placeholder text, disabled state, and custom row count
 * - Two-way binding via `ngModel` or `FormControl`
 *
 * @example
 * <!-- Template-Driven Forms -->
 * <app-textarea
 *   name="bio"
 *   [(ngModel)]="bio"
 *   placeholder="Tell us about yourself"
 *   [Rows]="5">
 * </app-textarea>
 *
 * @example
 * <!-- Reactive Forms -->
 * <form [formGroup]="form">
 *   <app-textarea
 *     formControlName="comments"
 *     placeholder="Write a comment..."
 *     [Rows]="4">
 *   </app-textarea>
 * </form>
 */
@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class TextareaComponent implements ControlValueAccessor, OnInit {
  /** Disables the textarea when true. */
  @Input() disabled: boolean = false;

  /** Placeholder text displayed inside the textarea. */
  @Input() placeholder: string = '';

  /** Number of visible text rows. */
  @Input() Rows: any;

  /** Current value of the textarea. */
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

  /** Registers a callback for when the textarea is touched. */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /** Emits changes to Angular forms (assigned in registerOnChange). */
  onChange(e: any) {}

  /** Marks the control as touched (assigned in registerOnTouched). */
  onTouched() {}
}