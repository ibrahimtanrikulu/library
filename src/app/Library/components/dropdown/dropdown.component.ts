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
  @Input() searchStatus: boolean = false;
  @Input() placeholder: string = '';
  @Output() selectedList: EventEmitter<any[] | any> = new EventEmitter();
  list: DataType[] = [];
  selected?: DataType;
  dropdownStatus: boolean = false;

  change(value: DataType) {
    if (this.multiStatus) {
      console.log(value);
      this.list.push(value);
      console.log(this.list);
      
      const index = this.list.indexOf(value, 0);
      if (index == -1) {
        this.list.push(value);
      } else if (index >= 0) {
        this.list.splice(index, 1);
      }
      this.dropdownStatus = true;
      this.selectedList.emit(this.list);
    } else {
      this.selected = value;
      this.dropdownStatus = false;
      this.selectedList.emit(this.selected);
    }
  }
  clear() {
    this.list = [];
    this.selected = { text: '', value: 0 };
  }
}
