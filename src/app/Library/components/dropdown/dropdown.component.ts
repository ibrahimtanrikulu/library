import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataType } from '../../../Interfaces/DataType';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { SearchFilterPipe } from 'src/app/Pipe/search.pipe';
import { CheckboxComponent } from '../checkbox/checkbox.component';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, SearchFilterPipe, CheckboxComponent]
})
export class DropdownComponent implements OnInit {
  @Input() data: DataType[] = [];
  @Input() multiStatus = false;
  @Input() searchStatus = false;
  @Input() DropdownScrollHeightStatus = false;
  @Input() DropdownScrollHeight = '';
  @Input() placeholder = '';
  @Input() disabled = false;
  @Output() selectedList = new EventEmitter<DataType[]>();

  list: DataType[] = [];
  dropdownStatus = false;
  localData: DataType[] = [];
  text = '';
  filterText = ""

  ngOnInit() {
    this.localData = this.data;
  }

  change(value: DataType) {
    if (this.multiStatus) {
      const index = this.list.indexOf(value);
      if (index === -1) {
        this.list.push(value);
      } else {
        this.list.splice(index, 1);
      }
    } else {
      this.list = [value];
      this.dropdownStatus = false;
    }
    this.selectedList.emit(this.list);
    this.text = this.list.map(m => m.text).join(',');
    this.localData = this.data;
  }

  clear() {
    this.list = [];
    this.localData = this.data;
    this.text = '';
    this.selectedList.emit(this.list);
  }
}
