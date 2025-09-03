import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Progesbar – A simple progress bar component.
 *
 * *Features*
 * - Displays a horizontal progress indicator
 * - Accepts a numeric value between `0` and `100`
 * - Can be styled with custom SCSS for colors, animation, and size
 *
 * @example
 * <!-- Default progress bar -->
 * <app-progesbar [value]="40"></app-progesbar>
 *
 * @example
 * <!-- Dynamic progress bar bound to a variable -->
 * <app-progesbar [value]="uploadProgress"></app-progesbar>
 */
@Component({
  selector: 'app-progesbar',
  templateUrl: './progesbar.component.html',
  styleUrls: ['./progesbar.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProgesbarComponent {
  /** Progress value (0–100). */
  @Input() value: number = 50;
}