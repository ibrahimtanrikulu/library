import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { DataType } from '../../Interface/DataType';
import { IColumnType } from '../../Interface/CollumType';
import { InputComponent } from '../input/input.component';
import { InputnumberComponent } from '../inputnumber/inputnumber.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';

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
  ],
})
export class TableComponent implements OnInit {
  //input
  @Input() header: string = '';
  @Input() data: any[] = [];
  @Input() column: IColumnType[] = [];
  @Input() filterFormStatus: boolean = false;
  @Input() filterHeaderStatus: boolean = false;
  @Input() scrollWidthStatus: boolean = false;
  @Input() scrollHeightStatus: boolean = false;
  @Input() scrollHeight: string = '';
  @Input() paginationStatus: boolean = false;
  @Input() globalSearchStatus: boolean = false;

  @Input() checkListStatus: boolean = false;

  @Input() headerButtonLabel: string = '';
  @Output() headerButtonClick = new EventEmitter();
  @Output() checkList: EventEmitter<any[]> = new EventEmitter();

  //local variable
  localData: any[] = [];
  selected: any;
  filterIconStatus: boolean = true;
  filterText: string = '';
  paginationList: number[] = [];
  paginationNumberText: number = 10;
  paginationKey: number = 1;
  checkboxList: any[] = [];
  constructor() {}
  ngOnInit() {
    this.paginationStatus
      ? this.paginationListNumber()
      : (this.localData = this.data);
  }

  //add container
  headerButton() {
    this.headerButtonClick.emit();
  }

  //filter
  globalSearch(e: any) {
    this.checkboxList = [];
    this.paginationStatus
      ? this.paginationListNumber()
      : (this.localData = this.data);
    let value = e.target.value;
    if (value) {
      let result: any[] = [];
      this.localData.map((m) => {
        this.column.map((c) => {
          if (m[c.field] == value) {
            result.push(m);
          }
        });
      });

      this.localData = result;
    }
  }
  inputFilter(event: any, filed: any) {
    this.checkboxList = [];
    let value: string = event.target.value;
    this.paginationStatus
      ? this.paginationListNumber()
      : (this.localData = this.data);
    if (value) {
      let result = this.localData.filter((m) => m[filed].includes(value));
      this.localData = result;
    }
  }

  inputNumberFilter(event: any, filed: any) {
    this.checkboxList = [];
    let value: number = event.target.value;
    this.paginationStatus
      ? this.paginationListNumber()
      : (this.localData = this.data);
    if (value) {
      let result = this.localData.filter((m) => m[filed] == value);
      this.localData = result;
    }
  }

  dropdownFilter(data: DataType[], field: any) {
    this.checkboxList = [];
    this.paginationStatus
      ? this.paginationListNumber()
      : (this.localData = this.data);

    if (data.length > 0) {
      let result: any[] = [];
      this.localData.map((m) => {
        data.map((value) => {
          if (m[field] == value.text) {
            result.push(m);
          }
        });
      });
      this.localData = result;
    } else if (data.length == 0) {
      this.paginationStatus
        ? this.paginationListNumber()
        : (this.localData = this.data);
    }
  }

  alphabeticalOrder(field: any) {
    this.filterIconStatus
      ? (this.filterIconStatus = false)
      : (this.filterIconStatus = true);
    this.paginationStatus
      ? this.paginationListNumber()
      : (this.localData = this.data);

    if (this.filterIconStatus) {
      this.localData.sort(function (a, b) {
        if (a[field] < b[field]) return -1;
        if (a[field] > b[field]) return 1;
        return 0;
      });
    } else {
      this.localData.sort(function (a, b) {
        if (a[field] < b[field]) return 1;
        if (a[field] > b[field]) return -1;
        return 0;
      });
    }
  }

  //pagination
  paginationBefore() {
    if (this.paginationKey > 1) {
      this.paginationKey--;
      this.paginationNumber();
    }
  }
  paginationListNumber(e?: number) {
    this.checkboxList = [];
    e ? (this.paginationNumberText = e) : 10;
    let value = 0;
    let key = 0;
    this.paginationList = [];
    this.localData = this.data;
    this.localData.map((m) => {
      value++;
      if (value % this.paginationNumberText == 0) {
        key++;
        this.paginationList.push(key);
      }
    });
    if (!this.paginationList.length) {
      this.paginationList.push(1);
    }

    this.paginationNumber();
  }
  paginationNumber(key: number = this.paginationKey) {
    this.paginationKey = key;
    this.localData = [];
    let value: number = 0;
    let array: any[] = [];
    this.data.map((m) => {
      value++;
      if (value <= this.paginationNumberText) {
        this.localData.push(m);
      } else if (value > this.paginationNumberText) {
        array.push(this.localData);
        this.localData = [];
        value = 0;
      }
    });

    this.localData = array[key - 1];
    if (this.paginationList.length == 1) {
      this.localData = this.data;
    }
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
    console.log(e);
    if (e === true) {
    } else {
      const index = this.checkboxList.indexOf(e, 0);
      if (index == -1) {
        this.checkboxList.push(e);
      } else if (index >= 0) {
        this.checkboxList.splice(index, 1);
      }
      console.log(this.checkboxList);

      this.checkList.emit(this.checkboxList);
    }
  }
}
