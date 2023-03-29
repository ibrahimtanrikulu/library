import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Self, Optional } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';
import { PhoneDirective } from 'src/app/Directive/phone.directive';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, PhoneDirective],
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @Input() placeholder: string = '';
  @Input() type: string = '';
  @Input() inputNumberMax: any;
  @Input() inputNumberMin: any;
  @Input() textAreaRows: any;
  @Input() ngModelStatus: boolean = false;
  group = new UntypedFormGroup({
    input: new UntypedFormControl(''),
  });
  touched: boolean = false;
  private ngControl: NgControl;

  _value: any;

  get value(): any {
    return this._value;
  }

  @Input()
  set value(value: any) {
    this._value = value;
    this.input.setValue(value, { emitEvent: false });
  }

  _disabled: any = false;

  get disabled(): any {
    return this._disabled;
  }

  @Input()
  set disabled(disabled: any) {
    this._disabled = disabled;
    if (disabled) {
      this.input.disable();
    } else {
      this.input.enable();
    }
  }

  get input() {
    return this.group.get('input') as UntypedFormControl;
  }

  constructor(@Optional() @Self() ngControl: NgControl) {
    this.ngControl = ngControl;
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    if (this.ngControl !== null) {
      this.ngControl.control?.statusChanges.subscribe((status) => {
        if (status === 'INVALID') {
          this.input.markAsDirty();
          this.input.markAsTouched();
          this.input.setErrors({ incorrect: true });
        }
      });
    } else {
    }
  }

  onTouched = () => {};

  writeValue(value: any): void {
    this.input.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.input.valueChanges.subscribe((value: any) => {
      this.markAsTouched();
      fn(value);
    });
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.input.disable();
    } else {
      this.input.enable();
    }
  }
}
