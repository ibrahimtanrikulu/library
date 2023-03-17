import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TabComponent {
  @Input() tabTitle: string = '';
  @Input() active = false;
}
