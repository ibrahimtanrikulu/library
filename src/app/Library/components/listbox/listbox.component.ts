import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataType } from '../../Interface/DataType';

@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ListboxComponent {
  @Input() data: DataType[] = [];
  @Input() searchStatus: boolean = false;
  @Input() ListBoxScrollHeightStatus: boolean = false;
  @Input() ListBoxScrollHeight: string = "100%";
  @Output() selectedList: EventEmitter<DataType[]> = new EventEmitter();

  list: DataType[] = [];
  dropdownStatus: boolean = false;
  localData: DataType[] = [];
  text: string = '';

  constructor() { }
  ngOnInit() {
    this.localData = this.data;
  }
  change(value: DataType) {
    let index = this.list.indexOf(value, 0);
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
  }
  search(e: any) {
    let value = e.target.value;
    if (value) {
      let result = this.data.filter((m) => m.text.includes(value));
      this.localData = result;
    } else {
      this.localData = this.data;
    }
  }
}
