import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceString'
})
export class SliceStringPipe implements PipeTransform {

  transform(data: string): string {
    const split = data.split('');
    const splitPop = split.pop();
    return split.join('');
  }

}
