import { Component } from '@angular/core';
import { Pizza } from './pizza';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pizzaParent: Array<Pizza> = [
    {name: 'marguerite', price: 12, url:'https://www.atelierdeschefs.com/media/recette-e30299-pizza-pepperoni-tomate-mozza.jpg'},
    {name: 'bronx', price: 8, url:'https://image.afcdn.com/recipe/20170105/24149_w1024h768c1cx2592cy1728.jpg'},
  ]
  //title = 'pizzafrontend';
}
