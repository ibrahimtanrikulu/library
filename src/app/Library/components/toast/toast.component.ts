import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MessageType } from '../../Interface/messageType';

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
}
