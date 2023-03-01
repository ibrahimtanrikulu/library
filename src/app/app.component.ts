import { Component } from '@angular/core';
import { DataType } from './Library/Interface/DataType';
import { TableType } from './Library/Interface/TableType';

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

  data: any[] = [
    { id: 1, kod: 'urun1', aciklama: 'deneme 1', fiyat: 100 },
    { id: 2, kod: 'urun2', aciklama: 'deneme 2', fiyat: 200 },
    { id: 3, kod: 'urun3', aciklama: 'deneme 3', fiyat: 300 },
  ];

  col: TableType[] = [
    { field: 'id', header: 'numara', width: '10%',filter:false },
    { field: 'kod', header: 'kod', width: '20%' },
    { field: 'aciklama', header: 'aciklama', width: '50%' },
    { field: 'fiyat', header: 'fiyat', width: '20%' },
  ];

  karsila(e: any) {
    console.log(e, 'Data');
  }

  show: boolean = true;
  tikla() {
    this.show = true;
  }
}
