import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  Self,
  Optional,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class TextareaComponent implements ControlValueAccessor, OnInit {
  @Input() placeholder: string = "";
  group = new UntypedFormGroup({
    input: new UntypedFormControl(''),
  });
  touched: boolean = false;
  private ngControl: NgControl;

  _value: string = '';

  get value(): string {
    return this._value;
  }

  @Input()
  set value(value: string) {
    this._value = value;
    this.input.setValue(value, { emitEvent: false });
  }

  _disabled: boolean = false;

  get disabled(): boolean {
    return this._disabled;
  }

  @Input()
  set disabled(disabled: boolean) {
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

  onTouched = () => {
  };

  writeValue(value: string): void {
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