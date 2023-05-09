import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataType } from '../../Interfaces/DataType';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';

@Component({
  selector: 'app-checkboxlist',
  templateUrl: './checkboxList.component.html',
  styleUrls: ['./checkboxList.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent, CheckboxComponent]
})
export class CheckboxListComponent implements OnInit {
  @Input() checkboxData: DataType[] = [];
  @Input() checkboxHeader = '';
  @Input() multiCheckbox = false;
  selectedList: number[] = [];
  selectedAllChecked = false;

  @Output() selectedData = new EventEmitter<number[]>();

  ngOnInit(): void { }

  selection(e: number) {
    if (this.multiCheckbox) {
      this.selectedList = [e];
    } else {
      const index = this.selectedList.indexOf(e);
      if (index === -1) {
        this.selectedList.push(e);
      } else {
        this.selectedList.splice(index, 1);
      }
    }
    this.selectedData.emit(this.selectedList);
  }

  selectedAll() {
    this.selectedList = this.checkboxData.map((m) => m.value);
    this.selectedAllChecked = true;
    this.selectedData.emit(this.selectedList);
  }

  selectedAllRemoveList() {
    this.selectedList = [];
    this.selectedAllChecked = false;
    this.selectedData.emit(this.selectedList);
  }

  reverse() {
    const selectedValues = this.selectedList.slice();
    this.selectedList = this.checkboxData
      .filter((m) => !selectedValues.includes(m.value))
      .map((m) => m.value);
    this.selectedData.emit(this.selectedList);
  }
}
