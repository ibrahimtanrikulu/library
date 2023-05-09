import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchFilter', pure: true, standalone: true })
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;
    return value.filter((item: any) => {
      const stringValue = JSON.stringify(item).toLowerCase();
      if (typeof item === 'number') {
        return stringValue.includes(args.toLowerCase());
      }
      return stringValue.includes(args.toLowerCase());
    });
  }
}
