import { Component } from '@angular/core';
import { LayoutService } from './service/layout.service';
import { DataType } from '../Interfaces/DataType';
import { IColumnType } from '../Interfaces/CollumType';
import { FilterTypeEnum } from '../Enums/FilterTypeEnum';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConfigComponent } from './components/config/config.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CheckboxListComponent } from '../components/checkboxList/checkboxList.component';
import { TableComponent } from '../components/table/table.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    SidebarComponent,
    ConfigComponent,
    NavbarComponent,
    ReactiveFormsModule,
    RouterModule,
    CheckboxListComponent,
    TableComponent
  ],
})
export class LayoutComponent {
  col: IColumnType[] = [
    {
      field: 'id',
      header: 'numara',
      width: '10%',
      filterType: FilterTypeEnum.text,
      inputStatus: true,
      filterPlaceholder: 'id',
    },
    {
      field: 'kod',
      header: 'kod',
      width: '40%',
      filterPlaceholder: 'seç',
      filterType: FilterTypeEnum.multiDropdown,
    },
    {
      field: 'aciklama',
      header: 'aciklama',
      width: '40%',
      filterType: FilterTypeEnum.text,
    },
    {
      field: 'fiyat',
      header: 'fiyat',
      width: '10%',
      filterType: FilterTypeEnum.text,
    },
    {
      field: 'edit',
      header: 'Düzenle',
      width: '5%',
    },
    {
      field: 'delete',
      header: 'Sil',
      width: '5%',
    },
  ];

  value: DataType[] = [
    { text: 'deneme', value: 1 },
    { text: 'araba', value: 2 },
    { text: 'dsa', value: 3 },
    { text: 'a', value: 4 },
    { text: 'c', value: 5 },
    { text: 'b', value: 6 },
  ];

  data: any[] = [
    { id: 1, kod: 'urun', aciklama: 'deneme', fiyat: 100 },
    { id: 2, kod: 'urun2', aciklama: 'araba', fiyat: 200 },
    { id: 3, kod: 'urun3', aciklama: 'ibrahim', fiyat: 300 },
    { id: 4, kod: 'urun4', aciklama: 'mehmet', fiyat: 300 },
    { id: 5, kod: 'urun5', aciklama: 'bakır', fiyat: 300 },
    { id: 6, kod: 'urun6', aciklama: 'altın', fiyat: 300 },
    { id: 7, kod: 'urun7', aciklama: 'test', fiyat: 300 },
    { id: 8, kod: 'urun8', aciklama: 'merrhaba', fiyat: 300 },
    { id: 9, kod: 'urun9', aciklama: 'ibrahim', fiyat: 300 },
    { id: 10, kod: 'urun10', aciklama: 'ibrahim', fiyat: 300 },
    { id: 11, kod: 'urun11', aciklama: 'ibrahim', fiyat: 300 },
    { id: 12, kod: 'urun12', aciklama: 'ibrahim', fiyat: 300 },
    { id: 5, kod: 'urun5', aciklama: 'bakır', fiyat: 300 },
    { id: 6, kod: 'urun6', aciklama: 'altın', fiyat: 300 },
    { id: 7, kod: 'urun7', aciklama: 'test', fiyat: 300 },
    { id: 8, kod: 'urun8', aciklama: 'merrhaba', fiyat: 300 },
    { id: 9, kod: 'urun9', aciklama: 'ibrahim', fiyat: 300 },
    { id: 10, kod: 'urun10', aciklama: 'ibrahim', fiyat: 300 },
    { id: 11, kod: 'urun11', aciklama: 'ibrahim', fiyat: 300 },
    { id: 12, kod: 'urun12', aciklama: 'ibrahim', fiyat: 300 },
    { id: 5, kod: 'urun5', aciklama: 'bakır', fiyat: 300 },
    { id: 6, kod: 'urun6', aciklama: 'altın', fiyat: 300 },
    { id: 7, kod: 'urun7', aciklama: 'test', fiyat: 300 },
    { id: 8, kod: 'urun8', aciklama: 'merrhaba', fiyat: 300 },
    { id: 9, kod: 'urun9', aciklama: 'ibrahim', fiyat: 300 },
    { id: 10, kod: 'urun10', aciklama: 'ibrahim', fiyat: 300 },
    { id: 11, kod: 'urun11', aciklama: 'ibrahim', fiyat: 300 },
    { id: 12, kod: 'urun12', aciklama: 'ibrahim', fiyat: 300 },
    { id: 5, kod: 'urun5', aciklama: 'bakır', fiyat: 300 },
    { id: 6, kod: 'urun6', aciklama: 'altın', fiyat: 300 },
    { id: 7, kod: 'urun7', aciklama: 'test', fiyat: 300 },
    { id: 8, kod: 'urun8', aciklama: 'merrhaba', fiyat: 300 },
    { id: 9, kod: 'urun9', aciklama: 'ibrahim', fiyat: 300 },
    { id: 10, kod: 'urun10', aciklama: 'ibrahim', fiyat: 300 },
    { id: 11, kod: 'urun11', aciklama: 'ibrahim', fiyat: 300 },
    { id: 12, kod: 'urun12', aciklama: 'ibrahim', fiyat: 300 },
    { id: 5, kod: 'urun5', aciklama: 'bakır', fiyat: 300 },
    { id: 6, kod: 'urun6', aciklama: 'altın', fiyat: 300 },
    { id: 7, kod: 'urun7', aciklama: 'test', fiyat: 300 },
    { id: 8, kod: 'urun8', aciklama: 'merrhaba', fiyat: 300 },
    { id: 9, kod: 'urun9', aciklama: 'ibrahim', fiyat: 300 },
    { id: 10, kod: 'urun10', aciklama: 'ibrahim', fiyat: 300 },
    { id: 11, kod: 'urun11', aciklama: 'ibrahim', fiyat: 300 },
    { id: 12, kod: 'urun12', aciklama: 'ibrahim', fiyat: 300 },
    { id: 5, kod: 'urun5', aciklama: 'bakır', fiyat: 300 },
    { id: 6, kod: 'urun6', aciklama: 'altın', fiyat: 300 },
    { id: 7, kod: 'urun7', aciklama: 'test', fiyat: 300 },
    { id: 8, kod: 'urun8', aciklama: 'merrhaba', fiyat: 300 },
    { id: 9, kod: 'urun9', aciklama: 'ibrahim', fiyat: 300 },
    { id: 10, kod: 'urun10', aciklama: 'ibrahim', fiyat: 300 },
    { id: 11, kod: 'urun11', aciklama: 'ibrahim', fiyat: 300 },
    { id: 12, kod: 'urun12', aciklama: 'ibrahim', fiyat: 300 },
    { id: 5, kod: 'urun5', aciklama: 'bakır', fiyat: 300 },
    { id: 6, kod: 'urun6', aciklama: 'altın', fiyat: 300 },
    { id: 7, kod: 'urun7', aciklama: 'test', fiyat: 300 },
    { id: 8, kod: 'urun8', aciklama: 'merrhaba', fiyat: 300 },
    { id: 9, kod: 'urun9', aciklama: 'ibrahim', fiyat: 300 },
    { id: 10, kod: 'urun10', aciklama: 'ibrahim', fiyat: 300 },
    { id: 11, kod: 'urun11', aciklama: 'ibrahim', fiyat: 300 },
    { id: 12, kod: 'urun12', aciklama: 'ibrahim', fiyat: 300 },
    { id: 5, kod: 'urun5', aciklama: 'bakır', fiyat: 300 },
    { id: 6, kod: 'urun6', aciklama: 'altın', fiyat: 300 },
    { id: 7, kod: 'urun7', aciklama: 'test', fiyat: 300 },
    { id: 8, kod: 'urun8', aciklama: 'merrhaba', fiyat: 300 },
    { id: 9, kod: 'urun9', aciklama: 'ibrahimaaaaaaaaa', fiyat: 300 },
    { id: 1099, kod: 'urun10', aciklama: 'ibrahim', fiyat: 300 },
    { id: 1199, kod: 'urun11', aciklama: 'ibrahim', fiyat: 300 },
    { id: 19999, kod: 'urun12', aciklama: 'ibrahim', fiyat: 300 },
  ];

  constructor(public layoutService: LayoutService) {}

  button() {}
}
