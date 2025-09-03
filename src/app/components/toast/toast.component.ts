import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'; 
import { MessageEnum } from 'src/app/Enums/messageEnum';
import { MessageType } from 'src/app/Interfaces/messageType';

/**
 * Toast – A temporary notification component.
 *
 * *Features*
 * - Displays a toast message with customizable type, colors, and icons
 * - Auto-hides after 4 seconds when `show` is set to true
 * - Provides helper methods to compute background, accent, and icon classes
 *
 * *Message Types*
 * - `Success`, `Info`, `Warning`, `Error`, `Custom`
 *
 * @example
 * <!-- Success toast -->
 * <app-toast
 *   [message]="{ text: 'Saved successfully!', status: MessageEnum.Success }"
 *   [show]="true">
 * </app-toast>
 *
 * @example
 * <!-- Error toast -->
 * <app-toast
 *   [message]="{ text: 'Something went wrong', status: MessageEnum.error }"
 *   [show]="true">
 * </app-toast>
 */
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ToastComponent implements OnChanges {
  /** Message object containing text and type (see `MessageEnum`). */
  @Input() message: MessageType = new MessageType();

  /** Whether the toast is visible. Automatically resets to false after 4s. */
  @Input() show: boolean = false;

  /**
   * Lifecycle hook that runs when inputs change.
   * If `show` is true, starts a 4-second timeout to auto-hide the toast.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (this.show) {
      setTimeout(() => (this.show = false), 4000);
    }
  }

  /**
   * Returns a pastel background color based on the message type.
   * @param status Message type (success, info, warning, error, custom)
   */
  getColor(status: MessageEnum): string {
    switch (status) {
      case MessageEnum.Success: return '#E5F8F0';
      case MessageEnum.Info:    return '#E9EAFE';
      case MessageEnum.warning: return '#FDF2E4';
      case MessageEnum.error:   return '#FDE8E7';
      case MessageEnum.custom:  return '#f3f4f6';
      default:                  return '#ffffff';
    }
  }

  /**
   * Returns a contrasting accent color (for icons, title, close button).
   * @param status Message type
   */
  getAccent(status: MessageEnum): string {
    switch (status) {
      case MessageEnum.Success: return '#16a34a'; // green-600
      case MessageEnum.Info:    return '#4f46e5'; // indigo-600
      case MessageEnum.warning: return '#b45309'; // amber-700
      case MessageEnum.error:   return '#dc2626'; // red-600
      case MessageEnum.custom:  return '#334155'; // slate-700
      default:                  return '#0f172a'; // slate-900
    }
  }

  /**
   * Returns the CSS class for the icon to display,
   * based on the message type.
   * @param status Message type
   */
  getIconClass(status: MessageEnum): string {
    switch (status) {
      case MessageEnum.Success: return 'fa-solid fa-check';
      case MessageEnum.Info:    return 'fa-solid fa-info';
      case MessageEnum.warning: return 'fa-solid fa-exclamation-triangle';
      case MessageEnum.error:   return 'fa-solid fa-xmark';
      case MessageEnum.custom:  return 'fa-solid fa-bell';
      default:                  return '';
    }
  }
}