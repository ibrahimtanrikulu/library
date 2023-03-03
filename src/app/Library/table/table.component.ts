import { Component, Input } from '@angular/core';
import { TableType } from '../Interface/TableType';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  //input
  @Input() header: string = '';
  @Input() data: any[] = [];
  @Input() column: TableType[] = [];
  @Input() filterFormStatus: boolean = false;
  @Input() filterHeaderStatus: boolean = false;
  @Input() scrollStatus: boolean = false;
  @Input() paginationStatus: boolean = false;
  @Input() globalSearch: boolean = false;

  //local variable
  iconStatus: boolean = true;

  //method
  headerFilter() {
    if (this.iconStatus) {
      this.iconStatus = false;
    } else {
      this.iconStatus = true;
    }
  }
}
