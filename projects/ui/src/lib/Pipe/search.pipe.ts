import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchFilter', pure: true, standalone: true })
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;
    return value.filter((item: any) => {
      if (typeof item === 'number') {
        const numberString = item.toString();
        return numberString.includes(args);
      }
      if (typeof item === 'object') {
        for (const key in item) {
          if (item.hasOwnProperty(key) && typeof item[key] === 'number') {
            const numberString = item[key].toString()
            if (numberString.includes(args)) {
              return true;
            }
          }
        }
      }
      const stringValue = JSON.stringify(item)
      return stringValue.includes(args);
    });
  }
} 