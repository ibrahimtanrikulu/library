import { Component } from '@angular/core';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent {

  constructor(private theme: ThemeService) { }

  switchTheme(themeValue: string): void {
    this.theme.current = themeValue
  }
}
