import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyconvertor'
})
export class CurrencyconvertorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('Pipe args : '+args);
    return value + ' USD$$';
  }

}
