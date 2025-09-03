import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListboxComponent } from '../listbox/listbox.component';
import { DialogComponent } from '../dialog/dialog.component';
import { SearchFilterPipe } from 'src/app/Pipe/search.pipe';
import { CalenderComponent } from '../calender/calender.component';
import { CheckboxComponent } from '../checkbox/checkbox.component'; 
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ButtonComponent } from '../button/button.component';
import { IColumnType } from 'src/app/Interfaces/CollumType';
import { DataType } from 'src/app/Interfaces/DataType';

/**
 * Table – A flexible data table with built-in filtering, sorting, pagination,
 * row selection, global search, and configurable columns.
 *
 * *Features*
 * - Column definitions via `IColumnType[]` (field, header, active, etc.)
 * - Per-column filters (dropdown), global search, and alphabetical sorting
 * - Optional pagination with dynamic page size
 * - Optional checklist selection with emitted results
 * - Column customization: toggle visibility & reorder (drag from external UI)
 *
 * @example
 * <!-- Basic usage -->
 * <app-table
 *   header="Users"
 *   [data]="users"
 *   [column]="userColumns">
 * </app-table>
 *
 * @example
 * <!-- With filters, pagination and header button -->
 * <app-table
 *   header="Orders"
 *   [data]="orders"
 *   [column]="orderColumns"
 *   [filterFormStatus]="true"
 *   [paginationStatus]="true"
 *   [globalSearchStatus]="true"
 *   headerButtonLabel="Add Order"
 *   (headerButtonClick)="onAddOrder()"
 *   (checkList)="onCheckedRows($event)">
 * </app-table>
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonComponent,
    DropdownComponent, 
    CheckboxComponent,
    CalenderComponent,
    SearchFilterPipe,
    DialogComponent,
    ListboxComponent
  ],
})
export class TableComponent implements OnInit {
  /** Optional table title shown above the grid. */
  @Input() header = '';

  /** Source data to render. */
  @Input() data: any[] = [];

  /** Column configuration list (see `IColumnType`). */
  @Input() column: IColumnType[] = [];

  /** Shows per-column filter UI when true. */
  @Input() filterFormStatus = false;

  /** Enables horizontal scroll styling when true. */
  @Input() scrollWidthStatus = true;

  /** Sets max height for the scrollable table body (CSS value). */
  @Input() scrollHeight: string = '';

  /** Enables pagination when true. */
  @Input() paginationStatus = false;

  /** Shows a global search input when true. */
  @Input() globalSearchStatus = false;

  /** Enables row checklist selection when true. */
  @Input() checkListStatus = false;

  /** Label for the optional header action button. */
  @Input() headerButtonLabel = '';

  /** Fired when the header action button is clicked. */
  @Output() headerButtonClick = new EventEmitter<void>();

  /** Emits the currently checked rows/items (when checklist is enabled). */
  @Output() checkList = new EventEmitter<any[]>();

  /** Working data used for current view (filtered/sorted/paged). */
  localData: any[] = [];

  /** Currently selected value from input filters. */
  selected: any;

  /** Currently selected pagination page number. */
  selectedPagination: any;

  /** Currently sorted field. */
  selectedField: any;

  /** Sort direction flag (true = ASC, false = DESC). */
  filterIconStatus = true;

  /** Global search text (bound to a search box in template). */
  globalFilterText = '';

  /** Generated pagination page list. */
  paginationList: number[] = [];

  /** Page size (items per page). */
  paginationNumberText = 10;

  /** Current page key (1-based). */
  paginationKey = 1;

  /** Selected rows (for checklist mode). */
  checkboxList: any[] = [];

  /** Whether the columns settings dialog/panel is visible. */
  collumsSettingsShow: boolean = false;

  /** Column metadata for customization UI (label/value). */
  collumsSettingCustomizable: DataType[] = [];

  constructor() { }

  /** Initializes pagination and column customization model. */
  ngOnInit(): void {
    this.column = this.column;
    this.paginationStatusCheck();
    this.column.map(m => {
      this.collumsSettingCustomizable.push({ text: m.header, value: m.field });
    });
  }

  /** Resets localData depending on pagination settings. */
  paginationStatusCheck() {
    if (this.paginationStatus) {
      this.paginationListNumber();
    } else {
      this.localData = [...this.data];
    }
  }

  /** Emits header action. */
  headerButton = () => this.headerButtonClick.emit();

  /** Example input handler for external filters. */
  inputMethod = (e: any) => this.selected = e;

  // -------- Filters --------

  /**
   * Applies a dropdown filter to `localData` by matching a field against selected items.
   * @param data Array of selected `DataType` (uses `.text` for matching)
   * @param field Field name in row objects to filter on
   */
  dropdownFilter(data: DataType[], field: string) {
    this.checkboxList = [];
    this.paginationStatusCheck();
    if (data.length > 0) {
      this.localData = this.localData.filter(m => data.some(value => m[field] === value.text));
    }
  }

  /**
   * Sorts `localData` by a given field; toggles ASC/DESC.
   * Works with numbers and strings.
   * @param field Property name to sort by
   */
  alphabeticalOrder(field: string) {
    this.filterIconStatus = !this.filterIconStatus;
    this.selectedField = field;
    this.localData.sort((a: any, b: any) => {
      const valueA = a[field];
      const valueB = b[field];
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return this.filterIconStatus ? valueA - valueB : valueB - valueA;
      }
      const strA = String(valueA).toLowerCase();
      const strB = String(valueB).toLowerCase();
      return this.filterIconStatus ? strA.localeCompare(strB) : strB.localeCompare(strA);
    });
  }

  /**
   * Filters `localData` by checking if field includes the given value.
   * @param value Search value
   * @param field Field to search in
   */
  inputSearch(value: any, field: string) {
    this.paginationStatusCheck();
    if (value) {
      this.localData = this.localData.filter(m => m[field].toString().includes(value));
    }
  }

  // -------- Pagination --------

  /** Go to previous page (if possible). */
  paginationBefore() {
    if (this.paginationKey > 1) {
      this.paginationKey = this.selectedPagination;
      this.paginationKey--;
      this.paginationNumber();
    }
  }

  /**
   * Rebuilds pagination list given a page size.
   * @param e Page size (defaults to `paginationNumberText`)
   */
  paginationListNumber(e: number = this.paginationNumberText) {
    this.checkboxList = [];
    this.paginationNumberText = e;
    this.paginationList = Array.from(
      { length: Math.ceil(this.data.length / this.paginationNumberText) },
      (_, i) => i + 1
    );
    this.paginationNumber();
  }

  /**
   * Applies page slicing to `localData` based on current page and size.
   * @param key Page number (1-based)
   */
  paginationNumber(key: number = this.paginationKey) {
    this.selectedPagination = key;
    const startIndex = (key - 1) * this.paginationNumberText;
    const endIndex = startIndex + this.paginationNumberText;
    this.localData = this.data.slice(startIndex, endIndex);
  }

  /** Go to next page (if possible). */
  paginationAfter() {
    if (this.paginationList.length > this.paginationKey) {
      this.paginationKey = this.selectedPagination;
      this.paginationKey++;
      this.paginationNumber();
    }
  }

  // -------- Checklist selection --------

  /**
   * Toggles selection for a given row and emits the updated checklist.
   * @param e Row/item identifier or object
   */
  checkboxCheck(e: any) {
    if (e !== true) {
      const index = this.checkboxList.indexOf(e);
      if (index === -1) {
        this.checkboxList.push(e);
      } else {
        this.checkboxList.splice(index, 1);
      }
      this.checkList.emit(this.checkboxList);
    }
  }

  // -------- Column settings --------

  /** Toggles the visibility of the columns settings UI. */
  collumsSettings = () => this.collumsSettingsShow = !this.collumsSettingsShow;

  /** Replaces the current columns array with a reordered selection. */
  collumsDrag = (selectedColumns: IColumnType[]) => this.column = [...selectedColumns];

  /**
   * Applies visibility flags from a selected columns list.
   * Any column not present in `selectedColumns` is set to `active = false`.
   * @param selectedColumns Subset of columns to be active
   */
  collumsMethod(selectedColumns: IColumnType[]) {
    this.column.map(c => c.active = false);
    selectedColumns.map(selectedColumn => {
      const column = this.column.find(c => c.field === selectedColumn.field);
      if (column) column.active = true;
    });
  }
}