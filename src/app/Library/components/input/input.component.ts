import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, Self } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
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
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() required = false;
  @Input() disabled = false;
  onChange: any = () => { };
  onTouch: any = () => { };
  @Output() OnChange: EventEmitter<any> = new EventEmitter()
  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }
  writeValue(obj: any): void {
    this.value = obj
    console.log(obj, "obj");
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  ngOnInit(): void {
    const control = this.controlDir.control;
    if (control) {
      this.value = control.value;
      const validators: ValidatorFn[] = control.validator ? [control.validator] : [];
      if (this.required) {
        validators.push(Validators.required);
      }

      control.setValidators(validators);
      control.updateValueAndValidity();
    }
  }

  click() {
    console.log(this.onChange, "onchange");

  }
}
