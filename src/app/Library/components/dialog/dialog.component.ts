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
  @Input() dialogHeader: string = '';
  @Input() dialogShow: boolean = false;
}
