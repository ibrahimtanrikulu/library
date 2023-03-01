import { Component, Input } from '@angular/core';
import { TableType } from '../Interface/TableType';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() tableData: any[] = [];
  @Input() tableCol: TableType[] = [];
}
