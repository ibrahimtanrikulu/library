import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { TableType } from '../Interface/TableType';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  //input
  @Input() header: string = '';
  @Input() data: any[] = [];
  @Input() column: TableType[] = [];
  @Input() filterFormStatus: boolean = false;
  @Input() filterHeaderStatus: boolean = false;
  @Input() scrollStatus: boolean = false;
  @Input() paginationStatus: boolean = false;
  @Input() globalSearchStatus: boolean = false;

  //local variable
  iconStatus: boolean = true;
  localData: any[] = [];
  filterText: string = '';
  paginationList: number[] = [];
  constructor() {}

  ngOnInit() {
    this.localData = this.data;
    this.setDefault();
  }

  setDefault() {
    let value = 0;
    let key = 0;
    this.localData.map((m) => {
      value++;
      if (value % 5 == 0) {
        key++;
        this.paginationList.push(key);
      }
    });
  }

  //methods

  //filter
  headerFilter() {
    if (this.iconStatus) {
      this.iconStatus = false;
    } else {
      this.iconStatus = true;
    }
  }
  globalSearch(e: any) {
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
    } else {
      this.localData = this.data;
    }
  }
  inputFilter(event: any, filed: any) {
    if (event.target.value) {
      let result = this.localData.filter((m) => m[filed] == event.target.value);
      this.localData = result;
    } else {
      this.localData = this.data;
    }
  }

  dropdownFilter(data: any, field: any) {
    if (data) {
      let result = this.localData.filter((m) => m[field] == data[field]);
      this.localData = result;
    } else {
      this.localData = this.data;
    }
  }

  //pagination
  paginationBefore() {}
  paginationNumber(key: number) {
    this.data.map()
  }
  paginationAfter() {}
}
