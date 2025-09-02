import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { CommonModule } from '@angular/common';  
import { ButtonComponent } from './components/button/button.component';
import { CalenderComponent } from './components/calender/calender.component';
import { CardComponent } from './components/card/card.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { InputComponent } from './components/input/input.component';
import { InputnumberComponent } from './components/inputnumber/inputnumber.component';
import { InputpasswordComponent } from './components/inputpassword/inputpassword.component';
import { DataType } from './Interfaces/DataType';
import { ListboxComponent } from './components/listbox/listbox.component';
import { ProgesbarComponent } from './components/progesbar/progesbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ToastComponent } from './components/toast/toast.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { TabComponent } from './components/tabview/tab/tab.component';
import { TabviewComponent } from './components/tabview/tabview.component';
import { CheckboxListComponent } from './components/checkboxList/checkboxList.component';
import { IForm } from './Interfaces/Form';
import { FormTypeEnum } from './Enums/formTypeEnum';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true, 
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,  
    ButtonComponent,
    CalenderComponent,
    CardComponent,
    CheckboxComponent,
    DialogComponent,
    DropdownComponent,
    InputComponent,
    InputnumberComponent,
    InputpasswordComponent,
    ListboxComponent,
    ProgesbarComponent,
    SpinnerComponent,
    SwitchComponent,
    ToastComponent,
    TextareaComponent,
    TabComponent,
    TabviewComponent,
    CheckboxListComponent,
    FormComponent,
    TableComponent
  ],
})
export class AppComponent { 
    header = 'Users';
  data = [
    { id: 1, name: 'Alice', role: 'Admin', age: 31 },
    { id: 2, name: 'Bob', role: 'Editor', age: 27 },
    { id: 4, name: 'Carol', role: 'Viewer', age: 23 },
    { id: 5, name: 'Alice', role: 'Admin', age: 31 },
    { id: 6, name: 'Bob', role: 'Editor', age: 27 },
    { id: 7, name: 'Carol', role: 'Viewer', age: 23 },
    { id: 8, name: 'Alice', role: 'Admin', age: 31 },
    { id: 9, name: 'Bob', role: 'Editor', age: 27 },
    { id: 0, name: 'Carol', role: 'Viewer', age: 23 }, 
  ];

  columns = [
    { header: 'ID', field: 'id', width: '80px', filterType: 'text', filterPlaceholder: 'ID' },
    { header: 'Name', field: 'name', filterType: 'text', filterPlaceholder: 'Search name', inputStatus: false },
    {
      header: 'Role',
      field: 'role',
      filterType: 'dropdown',
      filterPlaceholder: 'Role',
      filterData: [
        { value: 'admin', text: 'Admin' },
        { value: 'editor', text: 'Editor' },
        { value: 'viewer', text: 'Viewer' },
      ]
    },
    { header: 'Age', field: 'age', filterType: 'text', filterPlaceholder: 'Age' },
    { header: 'Edit', field: 'edit', click: (row: any) => alert('Edit: ' + row.name) },
    { header: 'Delete', field: 'delete', click: (row: any) => alert('Delete: ' + row.name) },
  ];
  
  onHeaderButton() { alert('Add new'); }
  onCheckList(selected: any[]) { console.log('Selected rows:', selected); }
}
