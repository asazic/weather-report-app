import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    return new Date(value  * 1000).toLocaleTimeString();
  }

}
