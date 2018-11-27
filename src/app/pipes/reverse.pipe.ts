import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }
  transform(array: any, shouldReverse: boolean): any {
    // return array.slice().reverse();
    if (shouldReverse) { return array.slice().reverse();}
    return array;
  }

}
