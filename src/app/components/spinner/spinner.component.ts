import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

/**
 * Spinner – A simple loading indicator component.
 *
 * *Features*
 * - Displays a spinner animation (style is defined in SCSS)
 * - Useful for indicating loading states in forms, buttons, or full pages
 *
 * @example
 * <!-- Inline spinner -->
 * <app-spinner></app-spinner>
 *
 * @example
 * <!-- Conditional usage -->
 * <button [disabled]="loading">
 *   <app-spinner *ngIf="loading"></app-spinner>
 *   Submit
 * </button>
 *
 * @example
 * <!-- Full-page loading -->
 * <div class="loading-overlay" *ngIf="loading">
 *   <app-spinner></app-spinner>
 * </div>
 */
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SpinnerComponent { }