import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Button – A customizable button component with optional icon and label.
 *
 * *Features*
 * - Supports different button types (`button`, `submit`, `reset`)
 * - Customizable style and CSS class
 * - Disabled state handling
 * - Emits a click event (`btnClick`) when pressed
 *
 * @example
 * <!-- Primary button -->
 * <app-button
 *   label="Save"
 *   cssClass="btn-primary"
 *   (btnClick)="onSave()">
 * </app-button>
 *
 * @example
 * <!-- Icon button -->
 * <app-button
 *   icon="fa fa-plus"
 *   label="Add"
 *   cssClass="btn-icon"
 *   (btnClick)="onAdd()">
 * </app-button>
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ButtonComponent {
  /** Optional icon class (e.g. FontAwesome, Material icons). */
  @Input() icon: string = '';

  /** Button type attribute (`button`, `submit`, `reset`). */
  @Input() type: string = 'button';

  /** Inline style string applied to the button element. */
  @Input() style: string = '';

  /** Custom CSS class name(s) applied to the button element. */
  @Input() cssClass: string = 'button';

  /** Whether the button is disabled. */
  @Input() isDisabled: boolean = false;

  /** The text label displayed inside the button. */
  @Input() label: string = '';

  /** Event emitted when the button is clicked. */
  @Output() btnClick = new EventEmitter<void>();

  /** Emits the `btnClick` event when the button is clicked. */
  onClick(): void {
    this.btnClick.emit();
  }
}