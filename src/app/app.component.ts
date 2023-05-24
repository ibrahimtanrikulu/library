import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataType } from './Interfaces/DataType';
import { IColumnType } from './Interfaces/CollumType';
import { FilterTypeEnum } from './Enums/FilterTypeEnum';
import { MessageType } from './Interfaces/messageType';
import { MessageEnum } from './Enums/messageEnum';
import { IForm } from './Interfaces/Form';
import { FormTypeEnum } from './Enums/formTypeEnum';

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

  dropdownCol: DataType[] = [
    { text: 'urun2', value: 1 },
    { text: 'urun4', value: 2 },
    { text: 'urun8', value: 3 },
  ];

  denemeInput: any;
  testInput: any;

  col: IColumnType[] = [
    {
      field: 'id',
      header: 'numara',
      width: '10%',
      filterType: FilterTypeEnum.text,
      inputStatus: true,
      filterPlaceholder:'id',
      
    },
    {
      field: 'kod',
      header: 'kod',
      width: '20%',
      filterData: this.dropdownCol,
      filterPlaceholder: 'seç',
      filterType: FilterTypeEnum.multiDropdown,
    },
    {
      field: 'aciklama',
      header: 'aciklama',
      width: '10%',
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
      click: this.duzenleTableClick.bind(this),
    },
    {
      field: 'delete',
      header: 'Sil',
      width: '5%',
      click: this.silTableClick.bind(this),
    },
    { field: 'extra', header: 'extra', width: '5%' },
  ];

  public PersonelForm!: FormGroup;
  formsObject: IForm[] = [
    {
      controlname: 'test',
      class: 'col-12 col-lg-6 col-md-8',
      header: 'Ad',
      type: FormTypeEnum.text,
      disabled: false,
    },
    {
      controlname: 'pc',
      class: 'col-12 col-lg-6 col-md-8',
      header: 'telefon',
      type: FormTypeEnum.number,
      max: 50,
      min: 20,
      disabled: false,
    },
    {
      controlname: 'telefon',
      class: 'col-12 col-lg-6 col-md-8',
      header: 'evet',
      type: FormTypeEnum.switch,
    },
    {
      class: 'col-12 col-lg-6 col-md-8',
      header: 'deneme',
      type: FormTypeEnum.dropdown,
      data: this.dropdownCol,
      isMultiType: true,
      onChange: this.dropdownMethod.bind(this),
    },
    {
      class: 'col-3',
      header: 'tikla',
      type: FormTypeEnum.button,
      click: this.button.bind(this),
    },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.PersonelForm = this.formBuilder.group({
      test: new FormControl(''),
      telefon: new FormControl({ value: true, disabled: false }, [
        Validators.required,
      ]),
      pc: new FormControl(0),
      ibrahim: new FormControl(""),
    });
  }

  button() {
    this.show ? (this.show = false) : (this.show = true);
    console.log(this.PersonelForm.value, this.deneme);
  }

  message: MessageType = new MessageType();
  show: boolean = false;
  tikla() {
    this.message.detail = 'dsadsadas';
    this.message.header = 'Deneme';
    this.message.status = MessageEnum.error;
    this.show ? (this.show = false) : (this.show = true);
  }

  deneme: boolean = true;
  testDene: string = '';
  tarih: Date = new Date();

  dropdownMethod(e: any) { }
  duzenleTableClick(e: any) {
    console.log(e);

    this.show = true;
  }

  silTableClick(e: any) { }
  maskdene() {
    console.log(this.testDene, 'test dene');
  }

  goster() {
    console.log(this.PersonelForm.value);
  }
}
