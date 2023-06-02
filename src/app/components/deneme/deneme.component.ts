import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class DenemeComponent {
  @Input() formControl!: FormControl;
  @Input() name: string = "";
  @Input() label: string = ""; 

  onChange(checked: boolean) {
    console.log(checked);

    this.formControl.setValue(checked);
  }
}
