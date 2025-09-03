import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { ButtonComponent } from '../button/button.component';
import { DataType } from 'src/app/Interfaces/DataType';

/**
 * CheckboxList – A reusable list component that renders multiple checkboxes
 * and provides selection utilities (select all, clear all, reverse selection).
 *
 * *Features*
 * - Renders checkboxes from an array of `DataType` objects
 * - Supports single or multiple selection mode
 * - Emits the currently selected values as an array of numbers
 * - Provides helper actions: select all, clear all, reverse selection
 *
 * @example
 * <!-- Basic usage -->
 * <app-checkboxlist
 *   [checkboxData]="options"
 *   checkboxHeader="Select items"
 *   [multiCheckbox]="false"
 *   (selectedData)="onSelected($event)">
 * </app-checkboxlist>
 *
 * @example
 * <!-- Multi-select with header -->
 * <app-checkboxlist
 *   [checkboxData]="categories"
 *   checkboxHeader="Categories"
 *   [multiCheckbox]="true"
 *   (selectedData)="onCategoriesChanged($event)">
 * </app-checkboxlist>
 */
@Component({
  selector: 'app-checkboxlist',
  templateUrl: './checkboxList.component.html',
  styleUrls: ['./checkboxList.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent, CheckboxComponent]
})
export class CheckboxListComponent implements OnInit {
  /** Array of checkbox items, each implementing `DataType` (label, value, etc.). */
  @Input() checkboxData: DataType[] = [];

  /** Optional header text displayed above the list. */
  @Input() checkboxHeader = '';

  /**
   * Selection mode:
   * - `true` → only one checkbox can be selected at a time
   * - `false` → multiple checkboxes can be selected
   */
  @Input() multiCheckbox = false;

  /** Emits the list of selected values whenever the selection changes. */
  @Output() selectedData = new EventEmitter<number[]>();

  /** Internally tracked list of selected item values. */
  selectedList: number[] = [];

  /** Whether "Select All" is currently active. */
  selectedAllChecked = false;

  ngOnInit(): void {}

  /**
   * Handles a single checkbox click.
   * @param e The selected item’s numeric value
   */
  selection(e: number): void {
    if (this.multiCheckbox) {
      // Single-select mode → keep only the clicked item
      this.selectedList = [e];
    } else {
      // Multi-select mode → toggle the clicked item
      const index = this.selectedList.indexOf(e);
      if (index === -1) {
        this.selectedList.push(e);
      } else {
        this.selectedList.splice(index, 1);
      }
    }
    this.emitSelectedData();
  }

  /** Selects all items in the list. */
  selectedAll(): void {
    this.selectedList = this.checkboxData.map((m) => m.value);
    this.selectedAllChecked = true;
    this.emitSelectedData();
  }

  /** Clears the entire selection. */
  selectedAllRemoveList(): void {
    this.selectedList = [];
    this.selectedAllChecked = false;
    this.emitSelectedData();
  }

  /** Reverses the current selection (selected → unselected, unselected → selected). */
  reverse(): void {
    const selectedValues = [...this.selectedList];
    this.selectedList = this.checkboxData
      .filter((m) => !selectedValues.includes(m.value))
      .map((m) => m.value);
    this.emitSelectedData();
  }

  /** Emits the current selection through the `selectedData` output. */
  private emitSelectedData(): void {
    this.selectedData.emit(this.selectedList);
  }
}