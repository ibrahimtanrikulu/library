import { Component } from '@angular/core';
import { LayoutService } from './service/layout.service';
import { ThemeService } from './service/theme.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(public layoutService: LayoutService,private theme: ThemeService) { 
  }

  public switchTheme(): void {
    if (this.theme.current === 'dark') {
        this.theme.current = 'light';
    } else {
        this.theme.current = 'dark';  
    }
  }
}
