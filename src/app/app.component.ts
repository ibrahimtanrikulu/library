import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';  
import { ShowcaseComponent } from './showcase/showcase.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true, 
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ShowcaseComponent
  ],
})
export class AppComponent {  
}
