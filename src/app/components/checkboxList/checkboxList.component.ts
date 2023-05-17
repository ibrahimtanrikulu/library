import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { DataType } from 'src/app/Interfaces/DataType';

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
  @Output() selectedData = new EventEmitter<number[]>();

  selectedList: number[] = [];
  selectedAllChecked = false;

  ngOnInit(): void { }

  selection(e: number): void {
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
    this.emitSelectedData();
  }

  selectedAll(): void {
    this.selectedList = this.checkboxData.map((m) => m.value);
    this.selectedAllChecked = true;
    this.emitSelectedData();
  }

  selectedAllRemoveList(): void {
    this.selectedList = [];
    this.selectedAllChecked = false;
    this.emitSelectedData();
  }

  reverse(): void {
    const selectedValues = [...this.selectedList];
    this.selectedList = this.checkboxData
      .filter((m) => !selectedValues.includes(m.value))
      .map((m) => m.value);
    this.emitSelectedData();
  }

  private emitSelectedData(): void {
    this.selectedData.emit(this.selectedList);
  }
}
