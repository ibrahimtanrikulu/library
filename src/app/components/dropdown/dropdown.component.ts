import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { SearchFilterPipe } from 'src/app/Pipe/search.pipe'; 
import { DataType } from 'src/app/Interfaces/DataType';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, SearchFilterPipe]
})
export class DropdownComponent implements OnInit {
  @Input() data: DataType[] = [];
  @Input() multiStatus = false;
  @Input() searchStatus = false;
  @Input() DropdownScrollHeight = '';
  @Input() placeholder = '';
  @Input() disabled = false;
  @Output() selectedList = new EventEmitter<DataType[]>();

  list: DataType[] = [];
  dropdownStatus = false;
  localData: DataType[] = [];
  text = '';
  filterText = '';

  ngOnInit() {
    this.localData = this.data;
  }

  toggle() {
    if (this.disabled) return;
    this.dropdownStatus = !this.dropdownStatus;
  }

  change(value: DataType) {
    if (this.multiStatus) {
      const index = this.list.indexOf(value);
      index === -1 ? this.list.push(value) : this.list.splice(index, 1);
      this.text = this.list.map(m => m.text).join(', ');
    } else {
      this.list = [value];
      this.text = value?.text ?? '';
      this.dropdownStatus = false;
    }
    this.selectedList.emit(this.list);
    this.localData = this.data;
  }

  clear() {
    this.list = [];
    this.localData = this.data;
    this.text = '';
    this.selectedList.emit(this.list);
  } 
  @HostListener('document:click')
  closeOnOutsideClick() {
    if (this.dropdownStatus) this.dropdownStatus = false;
  }
}
