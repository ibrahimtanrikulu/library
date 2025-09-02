import { CommonModule } from '@angular/common';
import { Component, Input, HostBinding } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ButtonComponent } from '../button/button.component';
import { CheckboxListComponent } from '../checkboxList/checkboxList.component';
import { InputComponent } from '../input/input.component';
import { InputnumberComponent } from '../inputnumber/inputnumber.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { SwitchComponent } from '../switch/switch.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { InputpasswordComponent } from '../inputpassword/inputpassword.component';
import { IForm } from 'src/app/Interfaces/Form';

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

  /** 🔧 Ayarlanabilir düzen */
  @Input() columns: number = 2;                 // kaç kolon
  @Input() gap: string = '1rem';                // boşluk (örn. .75rem, 12px)
  @Input() maxWidth: string = '920px';          // form kart genişliği
  @Input() collapseOnMobile: boolean = true;    // mobilde 1 kolona düşür

  /** Host’a CSS değişkeni basıyoruz – SCSS bunları kullanacak */
  @HostBinding('style.--form-columns') get _cols() { return String(this.columns); }
  @HostBinding('style.--form-gap') get _gap() { return this.gap; }
  @HostBinding('style.--form-max') get _max() { return this.maxWidth; }
  @HostBinding('class.form--no-collapse') get _noCollapse() { return !this.collapseOnMobile; }
}