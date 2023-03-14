import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class InputComponent {
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() formControlName = new FormControl();

  @Output() formControl: EventEmitter<FormControl> = new EventEmitter();
}
