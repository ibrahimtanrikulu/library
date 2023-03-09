import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ButtonComponent {
  public buttonText = '';
  @Input() icon: string = '';
  @Input() type: string = 'button';
  @Input() style: string = '';
  @Input() class: string = 'button';
  @Input() isDisabled = false;
  @Input()
  set label(name: string) {
    this.buttonText = name;
  }
  get name(): string {
    return this.buttonText;
  }
  @Output() btnClick = new EventEmitter();
  constructor() {}
  onClick() {
    this.btnClick.emit();
  }
}
