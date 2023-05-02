import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[phoneMask]',
  standalone: true,
})
export class PhoneDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const initialValue = this.el.nativeElement.value;

    const newValue = initialValue.replace(/[^0-9]/g, '');

    if (newValue.length > 3 && newValue.length <= 6) {
      event.target.value = `(${newValue.substring(0, 3)}) ${newValue.substring(
        3
      )}`;
    } else if (newValue.length > 6) {
      event.target.value = `(${newValue.substring(0, 3)}) ${newValue.substring(
        3,
        6
      )}-${newValue.substring(6, 10)}`;
    } else {
      event.target.value = newValue;
    }
  }
}