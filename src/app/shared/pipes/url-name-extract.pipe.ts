import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlNameExtract'
})
export class UrlNameExtractPipe implements PipeTransform {

  transform(url: string): string {
    const value = url;
    const valueArray = value.split('');
    const length = valueArray.length;
    const slicedValueArray = valueArray.slice(0, (length - 4));
    const reversedSlice = slicedValueArray.reverse();
    const finalValue = this.extractString(reversedSlice);
    return finalValue;
  }

  extractString(data) {
    const dataArray = [];
    for (const i of data) {
      if (i === '/') {
        break;
      } else {
        dataArray.push(i);
      }
    }
    const finalValueArray = dataArray.reverse();
    const numbers = this.numberRange(20);
    let finalValue: string;
    for (const j of finalValueArray) {
      // checking whether any value in finalValueArray is a number
      if (numbers.includes(Number(j))) {
        finalValue = finalValueArray.join('').toUpperCase();
      } else {
        finalValue = finalValueArray.join('');
      }
    }
    return finalValue;
  }

  numberRange (range) {
    return Array.from(Array(range).keys());
  }

}
