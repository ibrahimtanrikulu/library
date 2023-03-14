import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class InputComponent implements ControlValueAccessor {
  _test = "";
  @Input() placeholder: string = '';
  @Input() value: string = '';
  // @Output() formControl: EventEmitter<any> = new EventEmitter(); 
  change() { }
  get test(): string {
    return this._test;
  }

  set test(value: string) {
    this._test = value;
    this.propagateChange(this._test);
  }

  writeValue(value: string) {
    if (value !== undefined) {
      this.test = value;
    }
  }

  propagateChange = (_: any) => { };
  propagateTouched = (_: any) => { };

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {
    this.propagateTouched = fn;
  }

  touched($event: any) {
    this.propagateTouched($event);
  }

}
