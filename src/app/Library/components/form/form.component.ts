import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IForm } from '../../Interfaces/Form';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ButtonComponent } from '../button/button.component';
import { CheckboxListComponent } from '../checkboxList/checkboxList.component';
import { InputComponent } from '../input/input.component';
import { InputnumberComponent } from '../inputnumber/inputnumber.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { SwitchComponent } from '../switch/switch.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { InputpasswordComponent } from '../inputpassword/inputpassword.component';

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
    InputComponent,
    InputnumberComponent,
    CheckboxComponent,
    SwitchComponent,
    TextareaComponent,
    InputpasswordComponent
  ],
})
export class FormComponent {
  @Input() formGroup!: FormGroup;
  @Input() forms!: IForm[];
}
