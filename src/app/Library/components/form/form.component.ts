import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IForm } from '../../Interface/Form';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ButtonComponent } from '../button/button.component';
import { CheckboxListComponent } from '../checkboxList/checkboxList.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownComponent,
    CheckboxListComponent,
    ButtonComponent,
  ],
})
export class FormComponent {
  @Input() formGroup!: FormGroup;
  @Input() forms!: IForm[];
}
