import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AccordionComponent {
  @Input() header: string = ''; 
  show: boolean = false;
  open() {
    this.show ? (this.show = false) : (this.show = true);
  }
}
