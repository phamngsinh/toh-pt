import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}}</h2>
    <div>id:<label>{{hero.id}}</label></div>
    <div>name:<label>{{hero.name}}</label></div>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero : Hero = {
    id: 1,
    name: 'Windstorm'
  };

}
