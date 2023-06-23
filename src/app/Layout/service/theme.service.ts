import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private static readonly DEFAULT_THEME = 'light';
  private readonly style: HTMLLinkElement;

  constructor() {
    this.style = document.createElement('link');
    this.style.rel = 'stylesheet';
    document.head.appendChild(this.style);
    this.setThemeFromLocalStorage();
  }

  public get current(): string {
    return localStorage.getItem('theme') ?? ThemeService.DEFAULT_THEME;
  }

  public set current(value: string) {
    localStorage.setItem('theme', value);
    this.style.href = `/${value}.css`;
  }

  private setThemeFromLocalStorage() {
    const storedTheme = localStorage.getItem('theme');
    this.style.href = `/${storedTheme || ThemeService.DEFAULT_THEME}.css`;
  }
}
