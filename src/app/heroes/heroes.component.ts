import { Component, OnInit } from '@angular/core';

import { HeroInterface } from '../interfaces/hero-interface';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroInterface[];
  filter: string = 'all';

  constructor(private heroService: HeroService) { }

  updateFilter(filter: string) {
    this.filter = filter;
    this.getHeroes(this.filter);
    //updating the filter and what filter is set to, and then calling the heroes again.
  }

  getHeroes(filter: string) {
    this.heroes = this.heroService.getHeroes(filter);
  };

  filterIsActive(filter: string): boolean {
    return this.filter === filter;
  }

  ngOnInit() {
    // this.getHeroes('all');
    this.getHeroes(this.filter);
    // console.log(this.heroes); //for testing.
  }

}
