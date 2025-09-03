import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Card – A simple container component with an optional header.
 *
 * *Features*
 * - Displays a header text (via `header` input)
 * - Projects custom content using `<ng-content>`
 * - Useful for grouping related UI content in dashboards or forms
 *
 * @example
 * <!-- Basic card -->
 * <app-card header="User Info">
 *   <p>Name: John Doe</p>
 *   <p>Email: john@example.com</p>
 * </app-card>
 *
 * @example
 * <!-- Card without header -->
 * <app-card>
 *   <p>Custom content without a header</p>
 * </app-card>
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CardComponent {
  /** Text displayed in the card header. */
  @Input() header: string = '';
}