import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

import { HEROES } from '../mocks/mock-heroes';
import { HeroInterface } from '../interfaces/hero-interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(filter: string): HeroInterface[] {//what is getting returned: HeroInterface[]
    // if(filter=== 'all') {return HEROES;}
    if(!filter) {return HEROES;}
    //falsey rules: false, 0, '', undefined, NaN.
    return HEROES.filter(hero => {
      if(filter === 'hero' && hero.hero) {
        return hero;
      } else if(filter === 'villan' && !hero.hero) {
        return hero;
      }
      //return hero.powers.includes(filter);
      if(hero.powers.includes(filter)) return hero;//hopefully this will allow us to sort by powers.
    });
  }

  //day 8
  getIndividualHero(params: object): HeroInterface {
    // return HEROES.find((hero) => {
    //     return hero.id === heroId;
    // });
    return HEROES.find(hero => hero.id === +params['id']);// the + converts things to a number
  };

}
