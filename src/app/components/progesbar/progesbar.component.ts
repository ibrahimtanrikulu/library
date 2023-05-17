import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progesbar',
  templateUrl: './progesbar.component.html',
  styleUrls: ['./progesbar.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProgesbarComponent {
  @Input() value: number = 50;
}
