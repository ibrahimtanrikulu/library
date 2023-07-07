import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

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
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() styleInput: string = '';
  @Input() styleLabel: string = '';
  @Input() checked: boolean = false;
  onChange: any = () => { };
  onTouch: any = () => { };

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  constructor() { }

  ngOnInit() { }

  writeValue(checked: boolean) {
    this.checked = checked;
  }

  onModelChange(e: boolean) {
    this.checked = e;
    this.onChange(e);
  }
}