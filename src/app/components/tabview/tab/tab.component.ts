import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Tab – Represents a single tab inside a `TabviewComponent`.
 *
 * *Features*
 * - Accepts a title (`tabTitle`) displayed in the tab header
 * - Supports an `active` flag to mark the currently visible tab
 * - Content inside the `<app-tab>` element is projected into the tab panel
 *
 * @example
 * <!-- Simple tab -->
 * <app-tab tabTitle="Profile">
 *   <p>User profile details here.</p>
 * </app-tab>
 *
 * @example
 * <!-- Used with Tabview -->
 * <app-tabview>
 *   <app-tab tabTitle="Overview" [active]="true">
 *     Overview content
 *   </app-tab>
 *   <app-tab tabTitle="Settings">
 *     Settings form content
 *   </app-tab>
 * </app-tabview>
 */
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TabComponent {
  /** Title displayed in the tab header. */
  @Input() tabTitle: string = '';

  /** Whether this tab is currently active/visible. */
  @Input() active = false;
}