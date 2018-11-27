import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabetical'
})
export class AlphabeticalPipe implements PipeTransform {

  transform(array: any, args?: any): any[] {
    // return null;
    if (!array) {
      return array;//return an empty array.
    }
    array.sort((a, b) =>{
      //a is the previous item, and b is the current item.
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
