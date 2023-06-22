import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class LayoutService {
  sidebarShow: boolean = true;
  configShow: boolean = false;
  constructor() { }
}
