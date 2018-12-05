import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { Router } from '@angular/router';
//ONLY use Router for redirect events.
//ActivatedRoute allows us to get the URL, Router allows us to change the URL.


import { HEROES } from '../mocks/mock-heroes';
import { HeroInterface } from '../interfaces/hero-interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private router: Router) { }

  getHeroes(filter: string, powerFilter?: string): HeroInterface[] {//what is getting returned: HeroInterface[]
    // if(filter=== 'all') {return HEROES;}
    if(!filter && !powerFilter) {return HEROES;}
    //falsey rules: false, 0, '', undefined, NaN.
    return HEROES.filter(hero => { //hero is the callback function that acts as a iterator for the HEROES array.
      // if(filter === 'hero' && hero.hero) {
      //   return hero;
      // } else if(filter === 'villan' && !hero.hero) {
      //   return hero;
      // }
      // //return hero.powers.includes(filter);
      // if(hero.powers.includes(filter)) return hero;//hopefully this will allow us to sort by powers.
      // Now (day 9), adding powerFilter as a possible parameter
      if (!filter && powerFilter ) { return hero.powers.includes(powerFilter); }
      if (filter === 'hero' && hero.hero) { return this.filterHeroes(powerFilter, hero); }
      if (filter === 'villan' && !hero.hero) { return this.filterHeroes(powerFilter, hero); }
    });
  }
// Note to self:: learn up on TypeScript. (12/4/2018)
  //day 9, new filter for heroes
  filterHeroes(powerFilter: string, hero: HeroInterface): HeroInterface | boolean { //2 types of return 'types' (advanced typing)
    if (powerFilter) { return hero.powers.includes(powerFilter); }//accounts for catching any powers.
    return hero;
  }

  //day 8
  getIndividualHero(params: object): HeroInterface {
    // return HEROES.find((hero) => {
    //     return hero.id === heroId;
    // });
    //return HEROES.find(hero => hero.id === +params['id']);// the + converts things to a number
    //day 9 modification below to make use of the heroNotFound method/function.
    // if(!HEROES.includes(id === +params['id']))
    return HEROES.find(hero => hero.id === +params['id']);
    //handle at a later date, teacher forgot how to do the logic for this.
  };

  //day 9
  heroNotFound(noHero: string) {
    return this.router.navigateByUrl(`/hero-not-found/${noHero}`);
  }

}
