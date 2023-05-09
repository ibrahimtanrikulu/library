import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[formControlName][appInputMask]',
})
export class InputMaskDateDirective {
  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\s+/g, '');

    if (value.length > 4) {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4, 8)}`;
    } else if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }

    input.value = value;
  }
}
