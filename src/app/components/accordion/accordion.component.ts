import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Accordion – A simple component that toggles content visibility when the header is clicked.
 *
 * *Features*
 * - Single header with a collapsible content area (ng-content slot)
 * - Internal state (`show`) to track open/closed status
 * - Accessible: uses `aria-expanded` for screen readers
 *
 * @example
 * <!-- Basic usage -->
 * <app-accordion header="Details">
 *   The product description goes here.
 * </app-accordion>
 *
 * @example
 * <!-- Accordion list -->
 * <div class="accordion-list">
 *   <app-accordion header="Features"> ... </app-accordion>
 *   <app-accordion header="Delivery"> ... </app-accordion>
 *   <app-accordion header="Returns"> ... </app-accordion>
 * </div>
 */
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AccordionComponent {
  /** The text displayed in the accordion header. */
  @Input() header: string = '';

  /** Whether the accordion content is visible (open) or hidden (closed). */
  show: boolean = false;

  /** Toggles the accordion open/closed state when the header button is clicked. */
  open(): void {
    this.show = !this.show;
  }
}