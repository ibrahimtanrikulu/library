import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

// Your standalone components
import { ButtonComponent } from '../components/button/button.component';
import { InputComponent } from '../components/input/input.component';
import { InputpasswordComponent } from '../components/inputpassword/inputpassword.component';
import { InputnumberComponent } from '../components/inputnumber/inputnumber.component';
import { TextareaComponent } from '../components/textarea/textarea.component';
import { DropdownComponent } from '../components/dropdown/dropdown.component';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { SwitchComponent } from '../components/switch/switch.component';
import { CardComponent } from '../components/card/card.component';
import { TabviewComponent } from '../components/tabview/tabview.component';
import { TabComponent } from '../components/tabview/tab/tab.component';
import { TableComponent } from '../components/table/table.component';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [
    FormsModule, ReactiveFormsModule,
    ButtonComponent, InputComponent, InputpasswordComponent, InputnumberComponent,
    TextareaComponent, DropdownComponent, CheckboxComponent, SwitchComponent,
    CardComponent, TabviewComponent, TabComponent, TableComponent
  ],
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent {
  form: FormGroup;

  // dropdown
  countries = [
    { text: 'Germany', value: 1 },
    { text: 'Türkiye', value: 2 },
    { text: 'USA', value: 3 }
  ];
  selectedCountries: any[] = [];

  // table
  tableData = [
    { id: 1, name: 'Jane', role: 'Admin' },
    { id: 2, name: 'John', role: 'User'  },
    { id: 3, name: 'Ava',  role: 'User'  },
  ];
  tableCols = [
    { header: 'ID', field: 'id', width: '80px', inputStatus: false },
    { header: 'Name', field: 'name', inputStatus: false },
    { header: 'Role', field: 'role', inputStatus: false },
    { header: 'Edit', field: 'edit', inputStatus: false, click: (row:any)=>alert('Edit '+row.name) },
    { header: 'Delete', field: 'delete', inputStatus: false, click: (row:any)=>alert('Delete '+row.name) },
  ];

  // code toggles
  open = {
    button: false,
    input: false,
    textarea: false,
    dropdown: false,
    checkbox: false,
    switch: false,
    card: false,
    tabs: false,
    table: false,
  };

  // snippets (EN)
  code = {
    button: `
<!-- Variants & icon -->
<app-button cssClass="button button--default" label="Save"></app-button>
<app-button cssClass="button button--destructive" label="Delete"></app-button>
<app-button cssClass="button button--outline" label="Outline"></app-button>
<app-button cssClass="button button--icon button--default" icon="fa-solid fa-pen"></app-button>
<!-- Disabled -->
<app-button cssClass="button button--default" [isDisabled]="true" label="Disabled"></app-button>
    `.trim(),

    input: `
<!-- Text / Number / Password with floating labels -->
<app-input placeholder="Full Name" [(ngModel)]="fullName"></app-input>
<app-inputnumber placeholder="Age" [Min]="0" [Max]="120" [(ngModel)]="age"></app-inputnumber>
<app-inputpassword placeholder="Password" [(ngModel)]="password"></app-inputpassword>
    `.trim(),

    textarea: `
<!-- Shadcn-like textarea (same token palette as inputs) -->
<app-textarea placeholder="Bio" [Rows]="5" [(ngModel)]="bio"></app-textarea>
    `.trim(),

    dropdown: `
<!-- Single-select with search -->
<app-dropdown
  [data]="countries"
  [multiStatus]="false"
  [searchStatus]="true"
  placeholder="Country"
  (selectedList)="onDropdownChange($event)">
</app-dropdown>

<!-- Multi-select -->
<app-dropdown
  [data]="countries"
  [multiStatus]="true"
  [searchStatus]="true"
  placeholder="Countries"
  (selectedList)="onDropdownChange($event)">
</app-dropdown>
    `.trim(),

    checkbox: `
<!-- Accessible checkbox with label -->
<app-checkbox [(ngModel)]="agree" placeholder="I agree to terms"></app-checkbox>
    `.trim(),

    sw: `
<!-- iOS-like switch -->
<app-switch [(ngModel)]="news" placeholder="Subscribe to newsletter"></app-switch>
    `.trim(),

    card: `
<!-- Header is optional; if not provided, header area is hidden -->
<app-card header="Profile">
  <p>Card body content…</p>
</app-card>

<app-card>
  <p>Header omitted — simple container card.</p>
</app-card>
    `.trim(),

    tabs: `
<!-- Tabs with shadcn-like segmented control style -->
<app-tabview>
  <app-tab tabTitle="Account" [active]="true">
    <p>Account content…</p>
  </app-tab>
  <app-tab tabTitle="Password">
    <p>Password content…</p>
  </app-tab>
</app-tabview>
    `.trim(),

    table: `
<!-- Table with header tools, inline actions, pagination -->
<app-table
  [header]="'Users'"
  [data]="tableData"
  [column]="tableCols"
  [globalSearchStatus]="true"
  [paginationStatus]="true"
  [scrollWidthStatus]="true">
</app-table>
    `.trim(),
  };

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      fullName: [''],
      age: [25],
      password: [''],
      bio: [''],
      agree: [false],
      news: [true]
    });
  }

  onDropdownChange(list: any[]) {
    this.selectedCountries = list;
  }
}