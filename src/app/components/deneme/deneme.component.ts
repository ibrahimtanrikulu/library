import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class DenemeComponent {
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const data = event.dataTransfer!.getData('text');
    console.log('Bırakılan veri:', data);
  }

  onDragStart(event: DragEvent) {
    event.dataTransfer!.setData('text', 'Sürüklenecek veri');
  }
}
