import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabetical'
})
export class AlphabeticalPipe implements PipeTransform {
//made a change; no longer passing in optional arguments.
  transform(array: any, filterBy: string): any[] {
    // return null;
    if (!array) {
      return array;//return an empty array.
    }

    if (!filterBy) {return array;}
    //if there is no filterBy, return entire array

    array.sort((a, b) =>{
      //a is the previous item, and b is the current item.
      // a = a[filterBy].toString().toLowerCase();
      //not an array, but typescript knows this is a parameter getting passed in.
      // b = b[filterBy].toString().toLowerCase();

      if((typeof a[filterBy] || typeof b[filterBy]) ==='string') {
        a = a[filterBy].toLowerCase();
        b = b[filterBy].toLowerCase();
      } else {
        a = a[filterBy];
        b = b[filterBy]; //sorting by numbers.
      }


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
