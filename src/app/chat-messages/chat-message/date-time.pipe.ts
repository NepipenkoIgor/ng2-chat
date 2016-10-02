import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {

  transform(value: number): string {
    let date = new Date(value);
    let month: string | number = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let day: string | number = date.getDate();
    day = day < 10 ? `0${day}` : day;
    let hours: string | number = date.getHours();
    hours = hours < 10 ? `0${hours}` : hours;
    let minutes: string | number = date.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${day}.${month}.${date.getFullYear()} в ${hours}:${minutes}`;
  }
}
