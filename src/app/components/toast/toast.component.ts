import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'; 
import { MessageEnum } from 'src/app/Enums/messageEnum';
import { MessageType } from 'src/app/Interfaces/messageType';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ToastComponent implements OnChanges {
  @Input() message: MessageType = new MessageType();
  @Input() show: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.show) {
      setTimeout(() => (this.show = false), 4000);
    }
  }

  /** Pastel arka plan rengi */
  getColor(status: MessageEnum): string {
    switch (status) {
      case MessageEnum.Success:
        return '#E5F8F0';
      case MessageEnum.Info:
        return '#E9EAFE';
      case MessageEnum.warning:
        return '#FDF2E4';
      case MessageEnum.error:
        return '#FDE8E7';
      case MessageEnum.custom:
        return '#f3f4f6';
      default:
        return '#ffffff';
    }
  }

  /** Kontrastlı accent rengi (ikon, başlık, close için) */
  getAccent(status: MessageEnum): string {
    switch (status) {
      case MessageEnum.Success:
        return '#16a34a'; // green-600
      case MessageEnum.Info:
        return '#4f46e5'; // indigo-600
      case MessageEnum.warning:
        return '#b45309'; // amber-700
      case MessageEnum.error:
        return '#dc2626'; // red-600
      case MessageEnum.custom:
        return '#334155'; // slate-700
      default:
        return '#0f172a'; // slate-900
    }
  }

  getIconClass(status: MessageEnum): string {
    switch (status) {
      case MessageEnum.Success:
        return 'fa-solid fa-check';
      case MessageEnum.Info:
        return 'fa-solid fa-info';
      case MessageEnum.warning:
        return 'fa-solid fa-exclamation-triangle';
      case MessageEnum.error:
        return 'fa-solid fa-xmark';
      case MessageEnum.custom:
        return 'fa-solid fa-bell';
      default:
        return '';
    }
  }
}