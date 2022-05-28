import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'anvisa' })
export class PipeAnvisaNumber implements PipeTransform {
  transform(anvisaNumber: String) {
    return anvisaNumber.substring(0,1)+"."+anvisaNumber.substring(1,5)+"."+""+anvisaNumber.substring(5,9)+"."+anvisaNumber.substring(9,12)+"-"+anvisaNumber.substring(12,13);
  }
}