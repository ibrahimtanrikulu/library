import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CollumType } from '../../Interface/CollumType';
import { ButtonComponent } from '../button/button.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { DataType } from '../../Interface/DataType';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, DropdownComponent],
})
export class TableComponent implements OnInit {
  //input
  @Input() header: string = '';
  @Input() data: any[] = [];
  @Input() column: CollumType[] = [];
  @Input() filterFormStatus: boolean = false;
  @Input() filterHeaderStatus: boolean = false;
  @Input() scrollStatus: boolean = false;
  @Input() paginationStatus: boolean = false;
  @Input() globalSearchStatus: boolean = false;

  //local variable
  localData: any[] = [];
  constructor() {}
  ngOnInit() {
    this.paginationStatus
      ? this.paginationListNumber()
      : (this.localData = this.data);
  }

  //filter
  filterIconStatus: boolean = true;
  filterText: string = '';
  globalSearch(e: any) {
    this.paginationStatus
      ? this.paginationListNumber()
      : (this.localData = this.data);
    let value = e.target.value;
    if (value) {
      let result: any[] = [];
      this.localData.filter((f) => {
        this.column.map((m) => {
          if (f[m.field] == value) {
            result.push(f);
          }
        });
      });
      this.localData = result;
    }
  }
  inputFilter(event: any, filed: any) {
    this.paginationStatus
      ? this.paginationListNumber()
      : (this.localData = this.data);
    if (event.target.value) {
      let result = this.localData.filter((m) => m[filed] == event.target.value);
      this.localData = result;
    }
  }

  dropdownFilter(data: DataType[], field: any) {
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

  alphabeticalOrder(e: any) {
    if (this.filterIconStatus) {
      this.filterIconStatus = false;
    } else {
      this.filterIconStatus = true;
    }
    let ee: any[] = [];
    this.localData.map((m) => {
      ee.push(m[e]);
    });
  }

  //pagination
  paginationList: number[] = [];
  paginationNumberText: number = 10;
  paginationKey: number = 1;
  paginationBefore() {
    if (this.paginationKey > 1) {
      this.paginationKey--;
      this.paginationNumber();
    }
  }
  paginationListNumber(e?: number) {
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
}
