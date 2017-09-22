import { Component } from '@angular/core';

@Component({
	selector: "app-root",
	template: `
      <a routerLink="/heroes">Heroes</a>
      <nav>
	     <a routerLink="/dashboard">Dashboard</a>
	     <a routerLink="/heroes">Heroes</a>
	   </nav>
	   <router-outlet></router-outlet>
	`
})

export class AppComponent {
  title = 'Tour of Heroes';
}