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

/**
 * Form – A dynamic, grid-based form renderer.
 *
 * *Features*
 * - Renders inputs from a schema (`forms: IForm[]`) and binds them to an external `FormGroup`
 * - Responsive grid with configurable columns/gap/max width
 * - Optional mobile collapse behavior (stack fields on small screens)
 * - Composes your library controls (Input, Number, Dropdown, Checkbox, Switch, Textarea, Password, CheckboxList, Button)
 *
 * *Layout*
 * - Uses CSS custom properties on the host element:
 *   - `--form-columns`  → grid column count
 *   - `--form-gap`      → row/column gap
 *   - `--form-max`      → max width container
 *
 * @example
 * <!-- Reactive Forms + dynamic schema -->
 * <app-form
 *   [formGroup]="profileForm"
 *   [forms]="profileSchema"
 *   [columns]="2"
 *   gap="1rem"
 *   maxWidth="920px"
 *   [collapseOnMobile]="true">
 * </app-form>
 *
 * @example
 * // component.ts
 * profileForm = this.fb.group({
 *   firstName: [''],
 *   age: [null],
 *   email: [''],
 *   agree: [false],
 * });
 *
 * profileSchema: IForm[] = [
 *   { type: 'input', name: 'firstName', label: 'First name', placeholder: 'John' },
 *   { type: 'inputnumber', name: 'age', label: 'Age', min: 0, max: 120 },
 *   { type: 'inputpassword', name: 'email', label: 'Email', placeholder: 'john@ex.com' },
 *   { type: 'checkbox', name: 'agree', label: 'Accept terms' },
 * ];
 */
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
  /** External reactive form instance that this component binds to. */
  @Input() formGroup!: FormGroup;

  /** Dynamic field schema describing which controls to render. */
  @Input() forms!: IForm[];

  /** Number of grid columns (≥1). */
  @Input() columns: number = 2;

  /** Grid gap value (CSS length, e.g., '1rem', '12px'). */
  @Input() gap: string = '1rem';

  /** Max width of the form container (e.g., '920px', '100%'). */
  @Input() maxWidth: string = '100%';

  /** If true, fields stack on small screens (collapsible layout). */
  @Input() collapseOnMobile: boolean = true;

  /** Host CSS var: number of columns. */
  @HostBinding('style.--form-columns') get _cols() { return String(this.columns); }

  /** Host CSS var: grid gap. */
  @HostBinding('style.--form-gap') get _gap() { return this.gap; }

  /** Host CSS var: max width. */
  @HostBinding('style.--form-max') get _max() { return this.maxWidth; }

  /** Host class to disable mobile collapse when `collapseOnMobile` is false. */
  @HostBinding('class.form--no-collapse') get _noCollapse() { return !this.collapseOnMobile; }
}
