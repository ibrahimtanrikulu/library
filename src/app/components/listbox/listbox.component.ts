import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from 'src/app/Pipe/search.pipe';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { DataType } from 'src/app/Interfaces/DataType';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

/**
 * Listbox – A multi-select list component with optional search and drag-and-drop support.
 *
 * *Features*
 * - Renders a list of items (`DataType[]` or `any[]`)
 * - Multi-select via checkboxes
 * - Optional search input (`searchStatus`)
 * - Optional drag-and-drop reordering (`dragStatus`)
 * - Emits the selected items and reordered list
 *
 * @example
 * <!-- Basic listbox -->
 * <app-listbox
 *   [data]="users"
 *   (selectedList)="onSelectedUsers($event)">
 * </app-listbox>
 *
 * @example
 * <!-- With search and drag support -->
 * <app-listbox
 *   [data]="tasks"
 *   [searchStatus]="true"
 *   [dragStatus]="true"
 *   scrollHeight="300px"
 *   (selectedList)="onSelectedTasks($event)"
 *   (selectedDragList)="onReorderedTasks($event)">
 * </app-listbox>
 */
@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, CheckboxComponent, SearchFilterPipe, DragDropModule]
})
export class ListboxComponent {
  /** Source data for the listbox items. */
  @Input() data: any[] | DataType[] = [];

  /** Enables search box for filtering items when true. */
  @Input() searchStatus = false;

  /** Enables drag-and-drop reordering when true. */
  @Input() dragStatus = false;

  /** Maximum height of the listbox (CSS value, e.g. '300px'). */
  @Input() scrollHeight = '';

  /** Emits the currently selected list of items. */
  @Output() selectedList = new EventEmitter<any[]>();

  /** Emits the reordered list after drag-and-drop. */
  @Output() selectedDragList = new EventEmitter<any[]>();

  /** Internal list of selected items. */
  list: any[] = [];

  /** Dropdown open/close state (used for UI toggling). */
  dropdownStatus = false;

  /** Local working copy of data (used for filtering and drag operations). */
  localData: any[] = [];

  /** Display text concatenated from selected items. */
  text = '';

  /** Filter text bound to the search input. */
  filterText = '';

  ngOnInit() {
    this.localData = this.data;
  }

  /**
   * Toggles selection of a given item.
   * @param value The selected item
   */
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

  /**
   * Handles drag-and-drop reorder events and emits the updated list.
   * @param event CdkDragDrop event containing old/new index
   */
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.localData, event.previousIndex, event.currentIndex);
    this.selectedDragList.emit(this.localData);
  }
}