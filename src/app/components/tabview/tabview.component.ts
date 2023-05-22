import { CommonModule } from '@angular/common';
import { Component, ContentChildren, QueryList } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '..';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabview',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, TabComponent, ButtonComponent],
})
export class TabviewComponent {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  constructor() { }
  ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab) => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach((tab) => (tab.active = false));
    tab.active = true;
  }
}
