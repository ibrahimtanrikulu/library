import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from 'src/app/Pipe/search.pipe';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { DataType } from 'src/app/Interfaces/DataType';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, CheckboxComponent, SearchFilterPipe, DragDropModule]
})
export class ListboxComponent {
  @Input() data: any[] | DataType[] = [];
  @Input() searchStatus = false;
  @Input() dragStatus = false;
  @Input() scrollHeight = "";
  @Output() selectedList = new EventEmitter<any[]>();
  @Output() selectedDragList = new EventEmitter<any[]>();

  list: any[] = [];
  dropdownStatus = false;
  localData: any[] = [];
  text = '';
  filterText = "";

  ngOnInit() {
    this.localData = this.data;
  }
  change(value: any) {
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

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.localData, event.previousIndex, event.currentIndex);
    this.selectedDragList.emit(this.localData);
  }

}
