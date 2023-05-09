import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chunk',
  pure: true,
  standalone: true
})
export class ChunkPipe implements PipeTransform {
  transform(calendarDaysArray: any[], chunkSize: number): any[] {
    const calendarDays: any[] = [];
    let weekDays: any[] = [];

    calendarDaysArray.forEach((day, index) => {
      weekDays.push(day);
      if ((index + 1) % chunkSize === 0) {
        calendarDays.push(weekDays);
        weekDays = [];
      }
    });
    return calendarDays;
  }
}
