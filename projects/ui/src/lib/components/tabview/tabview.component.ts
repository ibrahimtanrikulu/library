import { CommonModule } from '@angular/common';
import { Component, ContentChildren, QueryList } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabComponent } from './tab/tab.component';

/**
 * Tabview – A container for multiple `TabComponent` items.
 *
 * *Features*
 * - Projects and manages multiple `<app-tab>` child components
 * - Automatically activates the first tab if none are active
 * - Handles switching between tabs by updating the `active` flag
 *
 * @example
 * <!-- Basic usage -->
 * <app-tabview>
 *   <app-tab title="Overview">Overview content</app-tab>
 *   <app-tab title="Details">Details content</app-tab>
 *   <app-tab title="Reviews">Reviews content</app-tab>
 * </app-tabview>
 *
 * @example
 * <!-- Default active tab -->
 * <app-tabview>
 *   <app-tab title="Profile" [active]="true">Profile info here</app-tab>
 *   <app-tab title="Settings">Settings form</app-tab>
 * </app-tabview>
 */
@Component({
  selector: 'app-tabview',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class TabviewComponent {
  /** All projected tab children inside the Tabview. */
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  constructor() {}

  /**
   * Lifecycle hook that ensures at least one tab is active.
   * If none are active, the first tab is selected.
   */
  ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab) => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  /**
   * Activates the given tab and deactivates all others.
   * @param tab The tab instance to activate
   */
  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach((tab) => (tab.active = false));
    tab.active = true;
  }
}