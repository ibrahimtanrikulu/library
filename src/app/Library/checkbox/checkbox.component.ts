import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataType } from '../Interface/DataType';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CheckboxComponent implements OnInit {
  @Input() checkboxData: DataType[] = [];
  @Input() checkboxHeader: string = '';
  @Input() multiCheckbox: boolean = false;
  selectedList: number[] = [];
  selectedAllChecked: boolean = false;

  @Output() selectedData: EventEmitter<number[]> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selection(e: number) {
    if (this.multiCheckbox == true) {
      this.selectedList = [];
      this.selectedList.push(e);
    } else {
      const index = this.selectedList.indexOf(e, 0);
      if (index == -1) {
        this.selectedList.push(e);
      } else if (index >= 0) {
        this.selectedList.splice(index, 1);
      }
    }
    this.selectedData.emit(this.selectedList);
  }

  selectedAll() {
    this.checkboxData.map((m) => {
      this.selectedList.push(m.value);
    });
    this.selectedAllChecked = true;
    this.selectedData.emit(this.selectedList);
  }

  selectedAllRemoveList() {
    this.selectedList = [];
    this.selectedAllChecked = false;
    this.selectedData.emit(this.selectedList);
  }

  reverse() {
    let liste = this.selectedList;
    this.selectedList = [];
    this.checkboxData.map((m) => {
      const index = liste.indexOf(m.value, 0);
      if (index == -1) {
        this.selectedList.push(m.value);
      } else if (index >= 0) {
        
      }
    });
    this.selectedData.emit(this.selectedList);
  }
}
