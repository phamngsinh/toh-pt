import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component\.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  // constructor(private heroService: HeroService) { }
  constructor(private heroService:HeroService){}
	getHeroes(): void {
      this.heroService.getHeroes().then(heroes=> this.heroes= heroes);
	  }
	ngOnInit(): void {
	  this.getHeroes();
	}
    onSelect(hero: Hero): void {
     this.selectedHero = hero;
 	 }
}