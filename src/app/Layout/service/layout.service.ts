import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  sidebarShow: boolean = true;
  constructor() { }
}
