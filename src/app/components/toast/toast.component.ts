import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MessageType } from 'src/app/Interfaces';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ToastComponent implements OnChanges {
  @Input() message: MessageType = new MessageType();
  @Input() show: boolean = false;
  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.show = false
    }, 4000);
  }
  getColor(status: string): string {
    switch (status) {
      case 'success':
        return '#E5F8F0';
      case 'info':
        return '#E9EAFE';
      case 'warning':
        return '#FDF2E4';
      case 'error':
        return '#FDE8E7';
      default:
        return '';
    }
  }

  getIconClass(status: string): string {
    switch (status) {
      case 'success':
        return 'fa-solid fa-check';
      case 'info':
        return 'fa-solid fa-info';
      case 'warning':
        return 'fa-solid fa-exclamation-triangle';
      case 'error':
        return 'fa-solid fa-xmark';
      default:
        return '';
    }
  }
}
