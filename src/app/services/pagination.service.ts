import { Injectable } from '@angular/core';

import * as _ from 'underscore';
//DO LATER: after downloading the npm @ the bottom, uncomment this import.

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }
  getPaginatior(allItems: number, currentPage: number, itemsOnPage: number) {
    //allItems is the total item count (702), the currentPage is page rendered on (start @ 1), and itemsOnPage is the max # of items viewable per page.
    const pagesCount = Math.ceil(allItems / itemsOnPage);
    // 722/12 = ??
    let firstPage: number,
      lastPage: number;
    if (pagesCount <= 12) { //this condition just in case we do have a list that is short enough.
      firstPage = 1;
      lastPage = pagesCount;
    } else {
      if (currentPage <= 3) {
        firstPage = 1;
        lastPage = 5;
      } else if (currentPage + 1 >= pagesCount) {
        firstPage = pagesCount - 4;
        lastPage = pagesCount;
      } else {
        firstPage = currentPage - 2;
        lastPage = currentPage + 2;
      }
    }
    //did the logic to show the numbers.
    const startIndex = (currentPage - 1) * itemsOnPage; //where to splice our array at.
    const endIndex = Math.min(startIndex + itemsOnPage - 1, allItems - 1);
    const pages = _.range(firstPage, lastPage + 1);
    return {
      allItems: allItems,
      currentPage: currentPage,
      itemsOnPage: itemsOnPage,
      pagesCount: pagesCount,
      firstPage: firstPage,
      lastPage: lastPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
      //returning an object.
    };
    // day11 DO LATER ON TERMINAL:
    // npm i @types/underscore --save-dev
  }
}
