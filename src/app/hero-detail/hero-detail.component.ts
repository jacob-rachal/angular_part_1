import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { HeroInterface } from '../interfaces/hero-interface';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: HeroInterface;
  //a single instance of a hero.

  constructor(private heroService: HeroService, private route: ActivatedRoute) { }
  //bringing the HeroService scope into hero-detail's scope, so we can reference it.

  getHero() {
    // const heroId: number =  this.route.params.value.id;
    // console.log(heroId);
    // this.hero = this.heroService.getIndividualHero(heroId);
    //well, that didn't work.
    return this.route.params.subscribe(params => {
        this.hero = this.heroService.getIndividualHero(params);
    });
  }

  ngOnInit() {
    // console.log(this.route);
    this.getHero();
    // console.log(this.hero);
  }

}
