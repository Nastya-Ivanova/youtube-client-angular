import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getDateFromString'
})
export class GetDateFromStringPipe implements PipeTransform {

  transform(date: string): Date {
    return new Date(date);
  }
}
