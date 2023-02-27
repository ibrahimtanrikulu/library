import { Component } from '@angular/core';
import { DataType } from './Library/Interface/DataType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value: DataType[] = [
    { text: 'deneme', value: 1 },
    { text: 'araba', value: 2 },
    { text: 'dsa', value: 3 },
    { text: 'a', value: 4 },
    { text: 'c', value: 5 },
    { text: 'b', value: 6 },
  ];

  karsila(e: any) { 
    console.log(e,"Data");
    
  }
}
