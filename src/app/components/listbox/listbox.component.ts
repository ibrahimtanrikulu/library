import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { InputComponent } from '../input/input.component';
import { SearchFilterPipe } from 'src/app/Pipe/search.pipe';
import { DataType } from 'src/app/Interfaces/DataType';

@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, CheckboxComponent, InputComponent, SearchFilterPipe],
})
export class ListboxComponent {
  @Input() data: DataType[] = [];
  @Input() searchStatus = false;
  @Input() ListBoxScrollHeightStatus = false;
  @Input() ListBoxScrollHeight = '100%';
  @Output() selectedList = new EventEmitter<DataType[]>();

  list: DataType[] = [];
  dropdownStatus = false;
  localData: DataType[] = [];
  text = '';
  filterText = "";

  ngOnInit() {
    this.localData = this.data;
  }
  change(value: DataType) {
    const index = this.list.indexOf(value);
    if (index === -1) {
      this.list.push(value);
    } else {
      this.list.splice(index, 1);
    }

    this.selectedList.emit(this.list);
    this.text = this.list.map(m => m.text).join(',');
    this.localData = this.data;
  }
}
