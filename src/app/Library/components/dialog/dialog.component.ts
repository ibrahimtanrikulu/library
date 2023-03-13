import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class DialogComponent {
  @Input() header: string = '';
  @Input() show: boolean = false;
  @Input() width: string = '25%';
  @Input() height: string = '25%';
}
