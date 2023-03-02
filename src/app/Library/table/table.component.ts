import { Component, Input } from '@angular/core';
import { TableType } from '../Interface/TableType';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() tableHeader: string = '';
  @Input() tableData: any[] = [];
  @Input() tableCol: TableType[] = [];
  @Input() tableFilterFormStatus: boolean = false;
  @Input() tableFilterHeaderStatus: boolean = false;
  @Input() tableScrollStatus: boolean = false;
}
