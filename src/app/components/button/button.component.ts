import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ButtonComponent {
  @Input() icon: string = '';
  @Input() type: string = 'button';
  @Input() style: string = '';
  @Input() cssClass: string = 'button';
  @Input() isDisabled: boolean = false;
  @Input() label: string = '';

  @Output() btnClick = new EventEmitter<void>();

  onClick(): void {
    this.btnClick.emit();
  }
}

