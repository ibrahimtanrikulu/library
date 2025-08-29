import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListboxComponent } from '../listbox/listbox.component';
import { DialogComponent } from '../dialog/dialog.component';
import { SearchFilterPipe } from 'src/app/Pipe/search.pipe';
import { CalenderComponent } from '../calender/calender.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { InputnumberComponent } from '../inputnumber/inputnumber.component';
import { InputComponent } from '../input/input.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ButtonComponent } from '../button/button.component';
import { IColumnType } from 'src/app/Interfaces/CollumType';
import { DataType } from 'src/app/Interfaces/DataType';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonComponent,
    DropdownComponent, 
    CheckboxComponent,
    CalenderComponent,
    SearchFilterPipe,
    DialogComponent,
    ListboxComponent
  ],
})
export class TableComponent implements OnInit {
  @Input() header = '';
  @Input() data: any[] = [];
  @Input() column: IColumnType[] = [];
  @Input() filterFormStatus = false;
  @Input() scrollWidthStatus = true;
  @Input() scrollHeight: string = '';
  @Input() paginationStatus = false;
  @Input() globalSearchStatus = false;
  @Input() checkListStatus = false;
  @Input() headerButtonLabel = '';
  @Output() headerButtonClick = new EventEmitter<void>();
  @Output() checkList = new EventEmitter<any[]>();
  localData: any[] = [];
  selected: any;
  selectedPagination: any;
  selectedField: any;
  filterIconStatus = true;
  globalFilterText = '';
  paginationList: number[] = [];
  paginationNumberText = 10;
  paginationKey = 1;
  checkboxList: any[] = [];
  collumsSettingsShow: boolean = false;
  collumsSettingCustomizable: DataType[] = []
  constructor() { }
  ngOnInit(): void {
    this.column = this.column;
    this.paginationStatusCheck()
    this.column.map(m => {
      this.collumsSettingCustomizable.push({ text: m.header, value: m.field });
    })
  }
  paginationStatusCheck() {
    if (this.paginationStatus) {
      this.paginationListNumber();
    } else {
      this.localData = [...this.data];
    }
  }

  //add container
  headerButton = () => this.headerButtonClick.emit();

  //İnput 
  inputMethod = (e: any) => this.selected = e;

  //filter
  dropdownFilter(data: DataType[], field: string) {
    this.checkboxList = [];
    this.paginationStatusCheck()
    if (data.length > 0) {
      this.localData = this.localData.filter(m => data.some(value => m[field] === value.text));
    }
  }
  alphabeticalOrder(field: string) {
    this.filterIconStatus = !this.filterIconStatus;
    this.selectedField = field;
    this.localData.sort((a: any, b: any) => {
      const valueA = a[field];
      const valueB = b[field];
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return this.filterIconStatus ? valueA - valueB : valueB - valueA;
      }
      const strA = String(valueA).toLowerCase();
      const strB = String(valueB).toLowerCase();
      return this.filterIconStatus ? strA.localeCompare(strB) : strB.localeCompare(strA);
    });
  }
  inputSearch(value: any, field: string) {
    this.paginationStatusCheck();
    if (value) {
      this.localData = this.localData.filter(m => m[field].toString().includes(value));
    }
  }

  //pagination
  paginationBefore() {
    if (this.paginationKey > 1) {
      this.paginationKey = this.selectedPagination
      this.paginationKey--;
      this.paginationNumber();
    }
  }
  paginationListNumber(e: number = this.paginationNumberText) {
    this.checkboxList = [];
    this.paginationNumberText = e;
    this.paginationList = Array.from({ length: Math.ceil(this.data.length / this.paginationNumberText) }, (_, i) => i + 1);
    this.paginationNumber();
  }
  paginationNumber(key: number = this.paginationKey) {
    this.selectedPagination = key
    const startIndex = (key - 1) * this.paginationNumberText;
    const endIndex = startIndex + this.paginationNumberText;
    this.localData = this.data.slice(startIndex, endIndex);
  }
  paginationAfter() {
    if (this.paginationList.length > this.paginationKey) {
      this.paginationKey = this.selectedPagination
      this.paginationKey++;
      this.paginationNumber();
    }
  }

  //checkboxList
  checkboxCheck(e: any) {
    if (e !== true) {
      const index = this.checkboxList.indexOf(e);
      if (index === -1) {
        this.checkboxList.push(e);
      } else {
        this.checkboxList.splice(index, 1);
      }
      this.checkList.emit(this.checkboxList);

    }
  }

  //collumsSettings
  collumsSettings = () => this.collumsSettingsShow = !this.collumsSettingsShow;
  collumsDrag = (selectedColumns: IColumnType[]) => this.column = [...selectedColumns];
  collumsMethod(selectedColumns: IColumnType[]) {
    this.column.map(c => {
      c.active = false;
    });


    selectedColumns.map(selectedColumn => {
      const column = this.column.find(c => c.field === selectedColumn.field);
      if (column) {
        column.active = true;
      }
    });
  }
}
