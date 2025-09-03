import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { SearchFilterPipe } from 'src/app/Pipe/search.pipe'; 
import { DataType } from 'src/app/Interfaces/DataType';

/**
 * Dropdown – A customizable dropdown/select component with single or multiple selection.
 *
 * *Features*
 * - Renders options from an array of `DataType` objects
 * - Supports single-select or multi-select mode
 * - Optional search box for filtering items
 * - Emits the currently selected list of values
 * - Can be disabled programmatically
 *
 * @example
 * <!-- Single select -->
 * <app-dropdown
 *   [data]="countries"
 *   placeholder="Select a country"
 *   (selectedList)="onCountrySelected($event)">
 * </app-dropdown>
 *
 * @example
 * <!-- Multi-select with search -->
 * <app-dropdown
 *   [data]="tags"
 *   [multiStatus]="true"
 *   [searchStatus]="true"
 *   placeholder="Select tags"
 *   (selectedList)="onTagsChanged($event)">
 * </app-dropdown>
 */
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, SearchFilterPipe]
})
export class DropdownComponent implements OnInit {
  /** Array of dropdown items, each implementing `DataType` (text, value, etc.). */
  @Input() data: DataType[] = [];

  /** Enables multi-select mode when true. */
  @Input() multiStatus = false;

  /** Shows a search box to filter options when true. */
  @Input() searchStatus = false;

  /** Maximum height of the dropdown list (CSS string, e.g. '200px'). */
  @Input() DropdownScrollHeight = '';

  /** Placeholder text shown when no value is selected. */
  @Input() placeholder = '';

  /** Disables the dropdown when true. */
  @Input() disabled = false;

  /** Emits the list of selected items whenever the selection changes. */
  @Output() selectedList = new EventEmitter<DataType[]>();

  /** Internal list of selected items. */
  list: DataType[] = [];

  /** Whether the dropdown is currently open. */
  dropdownStatus = false;

  /** Local copy of data (used for filtering). */
  localData: DataType[] = [];

  /** Current text displayed in the dropdown input. */
  text = '';

  /** Search filter text (bound to search input). */
  filterText = '';

  ngOnInit() {
    this.localData = this.data;
  }

  /** Toggles the dropdown open/close state (ignored if disabled). */
  toggle() {
    if (this.disabled) return;
    this.dropdownStatus = !this.dropdownStatus;
  }

  /**
   * Handles selection of an option.
   * - In multi-select mode, toggles the item in/out of the list.
   * - In single-select mode, replaces the current value and closes the dropdown.
   * @param value The selected `DataType` option
   */
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

  /** Clears all selections and resets the displayed text. */
  clear() {
    this.list = [];
    this.localData = this.data;
    this.text = '';
    this.selectedList.emit(this.list);
  } 

  /** Closes the dropdown when clicking outside. */
  @HostListener('document:click')
  closeOnOutsideClick() {
    if (this.dropdownStatus) this.dropdownStatus = false;
  }
}