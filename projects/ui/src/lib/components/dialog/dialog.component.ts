import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Dialog – A simple modal dialog container.
 *
 * *Features*
 * - Displays a header and projected content
 * - Configurable width and height
 * - Can be toggled open/closed via the `show` input
 *
 * @example
 * <!-- Basic dialog -->
 * <app-dialog
 *   header="Confirm Action"
 *   [show]="isOpen"
 *   width="400px"
 *   height="200px">
 *   <p>Are you sure you want to continue?</p>
 * </app-dialog>
 *
 * @example
 * <!-- Fullscreen dialog -->
 * <app-dialog
 *   header="Image Viewer"
 *   [show]="true"
 *   width="100%"
 *   height="100%">
 *   <img src="photo.jpg" alt="Preview" />
 * </app-dialog>
 */
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class DialogComponent {
  /** Text displayed in the dialog header. */
  @Input() header: string = '';

  /** Whether the dialog is visible (true) or hidden (false). */
  @Input() show: boolean = false;

  /** Width of the dialog (e.g. '400px', '50%', 'auto'). */
  @Input() width: string = 'auto';

  /** Height of the dialog (e.g. '300px', '80%', 'auto'). */
  @Input() height: string = 'auto';
}