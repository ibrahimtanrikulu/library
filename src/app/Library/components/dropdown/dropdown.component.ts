import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataType } from '../../Interface/DataType';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class DropdownComponent {
  @Input() data: DataType[] = [];
  @Input() multiStatus: boolean = false;
  @Input() SearchStatus: boolean = false;
  @Output() selectedList: EventEmitter<any[]> = new EventEmitter();
  list: DataType[] = [];
  selected: DataType = { text: '', value: 0 };
  dropdownStatus: boolean = false;
  change(value: DataType = this.data[0]) {
    if (this.multiStatus) {
      this.dropdownStatus = false;
    } else {
      this.selected = value;
      this.dropdownStatus = false;
    }
    this.selectedList.emit(this.list);
  }
}
