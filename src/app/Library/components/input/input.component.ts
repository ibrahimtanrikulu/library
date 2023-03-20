import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Provider,
  Self,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  // @Output() OnChange: EventEmitter<any> = new EventEmitter();
  // constructor(@Self() public controlDir: NgControl) {
  //   this.controlDir.valueAccessor = this;
  // }
  // writeValue(obj: any): void {
  //   this.value = obj;
  //   console.log(obj, 'obj');
  // }
  // registerOnChange(fn: any): void {
  //   this.onChange = fn;
  // }
  // registerOnTouched(fn: any): void {
  //   this.onTouch = fn;
  // }
  // setDisabledState?(isDisabled: boolean): void {
  //   this.disabled = isDisabled;
  // }
  // ngOnInit(): void {
  //   const control = this.controlDir.control;
  //   if (control) {
  //     this.value = control.value;
  //     const validators: ValidatorFn[] = control.validator
  //       ? [control.validator]
  //       : [];
  //     if (this.required) {
  //       validators.push(Validators.required);
  //     }
  //     control.setValidators(validators);
  //     control.updateValueAndValidity();
  //   }
  // }
  @Input() placeholder: string = '';
  @Input() required = false;
  @Input() disabled = false;

  onChange: any = () => {};
  onTouch: any = () => {};
  constructor() {}
  set value(val: string) {
    this.onChange(val);
    this.onTouch(val);
  }

  writeValue(value: any) {
    console.log(value, 'value');
    this.value = value;
  }

  registerOnChange(fn: any) {
    console.log(fn, 'fn');
    this.onChange = fn;
  }

  registerOnTouched(onTouched: Function) {
    console.log(onTouched, 'onTouched');
    this.onTouch = onTouched;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
