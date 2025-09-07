import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

// Your standalone components
import { ButtonComponent } from '../components/button/button.component'; 
import { DropdownComponent } from '../components/dropdown/dropdown.component'; 
import { TabviewComponent } from '../components/tabview/tabview.component';
import { TabComponent } from '../components/tabview/tab/tab.component';
import { TableComponent } from '../components/table/table.component';
import { AccordionComponent } from '../components/accordion/accordion.component';
import { CalenderComponent } from '../components/calender/calender.component'; 
import { ProgesbarComponent } from '../components/progesbar/progesbar.component';
import { DialogComponent } from '../components/dialog/dialog.component';
import { ListboxComponent } from '../components/listbox/listbox.component'; 
import { FormComponent } from '../components/form/form.component';
import { MessageEnum } from '../Enums/messageEnum';
import { MessageType } from '../Interfaces/messageType';
import { IForm } from '../Interfaces/Form';
import { FormTypeEnum } from '../Enums/formTypeEnum';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [
    FormsModule, ReactiveFormsModule,
    ButtonComponent, DropdownComponent, TabviewComponent, TabComponent, TableComponent,
    AccordionComponent, CalenderComponent, ProgesbarComponent,
    DialogComponent, ListboxComponent,  
    FormComponent
  ],
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent {
  form: FormGroup;
  demoForm: FormGroup;
  date: any = null;

  // dropdown
  countries = [
    { text: 'Germany', value: 1 },
    { text: 'Türkiye', value: 2 },
    { text: 'USA', value: 3 }
  ];
  selectedCountries: any[] = [];

  // table – richer sample for screenshots
  tableData = [
    { id: 1,  name: 'Jane Cooper',   role: 'Admin',   country: 'Germany',  status: 'Active',    lastLogin: '2025-09-02 09:24' },
    { id: 2,  name: 'John Doe',      role: 'User',    country: 'Türkiye',  status: 'Invited',   lastLogin: '2025-09-01 14:11' },
    { id: 3,  name: 'Ava Stone',     role: 'User',    country: 'USA',      status: 'Active',    lastLogin: '2025-09-05 20:45' },
    { id: 4,  name: 'Mark Lee',      role: 'Manager', country: 'UK',       status: 'Active',    lastLogin: '2025-09-03 13:10' },
    { id: 5,  name: 'Sara Kim',      role: 'Editor',  country: 'USA',      status: 'Suspended', lastLogin: '2025-08-29 08:03' },
    { id: 6,  name: 'Liam Nguyen',   role: 'Analyst', country: 'Germany',  status: 'Active',    lastLogin: '2025-09-06 07:42' },
    { id: 7,  name: 'Olivia Brown',  role: 'User',    country: 'Türkiye',  status: 'Active',    lastLogin: '2025-09-04 11:27' },
    { id: 8,  name: 'Noah Wilson',   role: 'Guest',   country: 'USA',      status: 'Invited',   lastLogin: '—' },
    { id: 9,  name: 'Emma Davis',    role: 'Manager', country: 'UK',       status: 'Active',    lastLogin: '2025-09-02 17:32' },
    { id: 10, name: 'Mia Martinez',  role: 'Editor',  country: 'Germany',  status: 'Active',    lastLogin: '2025-09-06 18:20' },
    { id: 11, name: 'Ethan Garcia',  role: 'User',    country: 'USA',      status: 'Suspended', lastLogin: '2025-08-25 22:12' },
    { id: 12, name: 'Sofia Rossi',   role: 'User',    country: 'Italy',    status: 'Active',    lastLogin: '2025-09-06 09:55' },
  ];

  roleOptions = [
    { text: 'Admin', value: 'Admin' },
    { text: 'Manager', value: 'Manager' },
    { text: 'Editor', value: 'Editor' },
    { text: 'Analyst', value: 'Analyst' },
    { text: 'User', value: 'User' },
    { text: 'Guest', value: 'Guest' },
  ];

  statusOptions = [
    { text: 'Active', value: 'Active' },
    { text: 'Invited', value: 'Invited' },
    { text: 'Suspended', value: 'Suspended' },
  ];

  countryOptions = [
    { text: 'Germany', value: 'Germany' },
    { text: 'Türkiye', value: 'Türkiye' },
    { text: 'USA', value: 'USA' },
    { text: 'UK', value: 'UK' },
    { text: 'Italy', value: 'Italy' },
  ];

  tableCols = [
    { header: 'ID', field: 'id', width: '70px', inputStatus: false },
    { header: 'Name', field: 'name', inputStatus: false },
    { header: 'Role', field: 'role', inputStatus: false, filterType: 'dropdown', filterData: this.roleOptions, filterPlaceholder: 'Role' },
    { header: 'Country', field: 'country', inputStatus: false, filterType: 'dropdown', filterData: this.countryOptions, filterPlaceholder: 'Country' },
    { header: 'Status', field: 'status', width: '110px', inputStatus: false, filterType: 'dropdown', filterData: this.statusOptions, filterPlaceholder: 'Status' },
    { header: 'Last Login', field: 'lastLogin', width: '160px', inputStatus: false, filterType: 'text', filterPlaceholder: 'Search date' },
    { header: 'Edit', field: 'edit', width: '60px', inputStatus: false, click: (row:any)=>alert('Edit '+row.name) },
    { header: 'Delete', field: 'delete', width: '60px', inputStatus: false, click: (row:any)=>alert('Delete '+row.name) },
  ];

  // listbox / checkboxList demo data
  fruits = [
    { text: 'Apple', value: 1 },
    { text: 'Banana', value: 2 },
    { text: 'Cherry', value: 3 },
    { text: 'Grape', value: 4 },
    { text: 'Orange', value: 5 }
  ];

  // progress / spinner / dialog / toast state
  progress = 45;
  loading = false;
  dialogOpen = false;
  toastShow = false;
  toastMsg: MessageType = { header: 'Saved', detail: 'Your changes are safe.', status: MessageEnum.Success, show: true } as MessageType;
  MessageEnum = MessageEnum; // expose enum to template if needed
  selectedListbox: any[] = [];

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
    accordion: false,
    calendar: false,
    progress: false,
    spinner: false,
    dialog: false,
    listbox: false,
    checkboxList: false,
    toast: false,
    form: false,
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
<!-- Table with header tools, filters, inline actions, pagination -->
<app-table
  class="table--zebra table--cozy"
  [header]="'Users'"
  [data]="tableData"
  [column]="tableCols"
  [globalSearchStatus]="true"
  [filterFormStatus]="true"
  [paginationStatus]="true"
  [scrollWidthStatus]="true">
</app-table>
    `.trim(),

    accordion: `
<!-- Simple accordion blocks -->
<app-accordion header="What is this?">
  This is a collapsible content section.
  Put any HTML inside.
</app-accordion>
<app-accordion header="Shipping details">
  Delivered worldwide within 3–7 days.
</app-accordion>
    `.trim(),

    calendar: `
<!-- Calendar with ngModel (CVA) -->
<app-calender name="date" [(ngModel)]="date"></app-calender>
    `.trim(),

    progress: `
<!-- Progress bar with dynamic value -->
<app-progesbar [value]="progress"></app-progesbar>
    `.trim(),

    spinner: `
<!-- Inline loading indicator -->
<app-spinner></app-spinner>
    `.trim(),

    dialog: `
<!-- Dialog toggled by state -->
<app-button cssClass="button button--default" label="Open Dialog" (btnClick)="dialogOpen = true"></app-button>
<app-dialog header="Confirm" [show]="dialogOpen" width="420px">
  <p>Are you sure?</p>
  <div style="display:flex; gap:.5rem; margin-top:1rem;">
    <app-button cssClass="button button--default" label="Yes" (btnClick)="dialogOpen=false"></app-button>
    <app-button cssClass="button button--outline" label="Cancel" (btnClick)="dialogOpen=false"></app-button>
  </div>
</app-dialog>
    `.trim(),

    listbox: `
<!-- Listbox with search & drag -->
<app-listbox [data]="fruits" [searchStatus]="true" [dragStatus]="true"
  (selectedList)="selectedListbox = $event"></app-listbox>
    `.trim(),

    checkboxList: `
<!-- Checkbox list (multi-select) -->
<app-checkboxlist [checkboxData]="fruits" checkboxHeader="Pick fruits"
  [multiCheckbox]="false" (selectedData)="onCheckboxList($event)"></app-checkboxlist>
    `.trim(),

    toast: `
<!-- Toast examples -->
<app-button cssClass="button button--default" label="Show success"
  (btnClick)="showToast('Saved', 'Everything went well', MessageEnum.Success)"></app-button>
<app-toast [message]="toastMsg" [show]="toastShow"></app-toast>
    `.trim(),

    form: `
<!-- Dynamic reactive form -->
<app-form [formGroup]="demoForm" [forms]="formSchema" [columns]="2" gap="1rem" maxWidth="920px"></app-form>
    `.trim(),
  };

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      fullName: [''],
      age: [25],
      password: [''],
      bio: [''],
      agree: [false],
      news: [true],
      date: [null]
    });

    this.demoForm = fb.group({
      firstName: [''],
      lastName: [''],
      age: [30],
      email: [''],
      password: [''],
      bio: [''],
      agree: [false],
      notify: [true],
      country: [null],
      roles: [[]],
      choices: [[]]
    });
  }

  onDropdownChange(list: any[]) {
    this.selectedCountries = list;
  }

  // form schema for <app-form>
  formSchema: IForm[] = [
    // Row 1
    { type: FormTypeEnum.text, controlname: 'firstName', header: 'First name' },
    { type: FormTypeEnum.text, controlname: 'lastName', header: 'Last name' },

    // Row 2
    { type: FormTypeEnum.number, controlname: 'age', header: 'Age', min: 0, max: 120 },
    { type: FormTypeEnum.text, controlname: 'email', header: 'Email' },

    // Row 3
    { type: FormTypeEnum.password, controlname: 'password', header: 'Password' },
    { type: FormTypeEnum.switch, controlname: 'notify', header: 'Email notifications' },

    // Row 4
    { type: FormTypeEnum.dropdown, controlname: 'country', header: 'Country', data: this.countries, isMultiType: false, search: true },
    { type: FormTypeEnum.dropdown, controlname: 'roles', header: 'Roles', data: this.roleOptions, isMultiType: true, search: true },

    // Row 5 - full width textarea
    { type: FormTypeEnum.textarea, controlname: 'bio', header: 'Bio', rows: '4', class: 'span-full' },

    // Row 6 - agreement
    { type: FormTypeEnum.checkbox, controlname: 'agree', header: 'Accept terms' },

    // Row 7 - checkbox list at the bottom, full width
    { type: FormTypeEnum.checkboxList, controlname: 'choices', header: 'Pick fruits', data: this.fruits, isMultiType: true, class: 'span-full', onChange: (val:any)=> this.onCheckboxList(val) },

    // Row 8 - submit (always at the very bottom)
    { type: FormTypeEnum.button, header: 'Submit', click: () => alert('Submitted!'), class: 'span-full' },
  ];

  showToast(header: string, detail: string, status: MessageEnum) {
    this.toastMsg = { header, detail, status, show: true } as MessageType;
    this.toastShow = true;
  }

  onCheckboxList(values: number[]) {
    // just log or use values
    console.log('checkboxList selected:', values);
  }

  simulateLoad() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 1500);
  }
}
