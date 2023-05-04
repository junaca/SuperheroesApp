import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(date: string): string {
    return date.split("T")[0];
  }

}
