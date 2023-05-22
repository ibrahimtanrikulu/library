import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent, CalenderComponent, CheckboxComponent, DropdownComponent, InputComponent, InputnumberComponent } from '..';
import { SearchFilterPipe } from 'src/app/Pipe';
import { DataType, IColumnType } from 'src/app/Interfaces';

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
    InputComponent,
    InputnumberComponent,
    CheckboxComponent,
    CalenderComponent,
    SearchFilterPipe,
  ],
})
export class TableComponent implements OnInit {
  @Input() header = '';
  @Input() data: any[] = [];
  @Input() column: IColumnType[] = [];
  @Input() filterFormStatus = false;
  @Input() scrollWidthStatus = false;
  @Input() scrollHeightStatus = false;
  @Input() paginationStatus = false;
  @Input() globalSearchStatus = false;
  @Input() checkListStatus = false;
  @Input() headerButtonLabel = '';
  @Output() headerButtonClick = new EventEmitter<void>();
  @Output() checkList = new EventEmitter<any[]>();
  localData: any[] = [];
  selected: any;
  selectedField: any;
  filterIconStatus = true;
  globalFilterText = '';
  inputFilterText = '';
  inputNumberFilterText = '';
  paginationList: number[] = [];
  paginationNumberText = 10;
  paginationKey = 1;
  checkboxList: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.paginationStatusCheck()
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

  //filter
  dropdownFilter(data: DataType[], field: any) {
    this.checkboxList = [];
    this.paginationStatusCheck()
    if (data.length > 0) {
      this.localData = this.localData.filter(m => data.some(value => m[field] === value.text));
    }
  }
  alphabeticalOrder(field: any) {
    this.filterIconStatus = !this.filterIconStatus;
    this.paginationStatusCheck();

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

  //pagination
  paginationBefore() {
    if (this.paginationKey > 1) {
      this.paginationKey--;
      this.paginationNumber();
    }
  }
  paginationListNumber(e: number = 10) {
    this.checkboxList = [];
    this.paginationNumberText = e;
    this.paginationList = Array.from({ length: Math.ceil(this.data.length / this.paginationNumberText) }, (_, i) => i + 1);
    this.paginationNumber();
  }
  paginationNumber(key: number = this.paginationKey) {
    const startIndex = (key - 1) * this.paginationNumberText;
    const endIndex = startIndex + this.paginationNumberText;
    this.localData = this.data.slice(startIndex, endIndex);
  }
  paginationAfter() {
    if (this.paginationList.length > this.paginationKey) {
      this.paginationKey++;
      this.paginationNumber();
    }
  }

  //İnput
  inputMethod(e: any) {
    this.selected = e;
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
}
