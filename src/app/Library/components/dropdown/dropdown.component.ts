import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataType } from '../../Interface/DataType';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class DropdownComponent implements OnInit {
  @Input() data: DataType[] = [];
  @Input() multiStatus: boolean = false;
  @Input() searchStatus: boolean = false;
  @Input() placeholder: string = '';
  @Output() selectedList: EventEmitter<DataType[]> = new EventEmitter();

  list: DataType[] = [];
  dropdownStatus: boolean = false;
  localData: DataType[] = [];
  text: string = '';

  constructor() {}
  ngOnInit() {
    this.localData = this.data;
  }
  change(value: DataType) {
    if (this.multiStatus) {
      let index = this.list.indexOf(value, 0);
      console.log(index);
      
      if (index == -1) {
        this.list.push(value);
      } else if (index >= 0) {
        this.list.splice(index, 1);
      }
      this.selectedList.emit(this.list);
      this.text = '';
      this.list.map((m) => {
        this.text += m.text + ',';
      });
      this.localData = this.data;
    } else {
      this.list = [];
      this.list.push(value);
      this.dropdownStatus = false;
      this.selectedList.emit(this.list);
      this.localData = this.data;
    }
  }
  clear() {
    this.list = [];
    this.localData = this.data;
    this.text = '';
    this.selectedList.emit(this.list);
  }
  search(e: any) {
    let value = e.target.value;
    if (value) {
      let result: any[] = [];
      this.data.filter((f) => {
        if (f.text == value) {
          result.push(f);
        } else {
        }
      });
      this.localData = result;
    } else {
      this.localData = this.data;
    }
  }
}
