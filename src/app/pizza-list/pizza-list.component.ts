import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';
import { Router } from '@angular/router';
import { PizzaDetailsComponent } from '../pizza-details/pizza-details.component';


@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  pizzaParent: Array<Pizza> = []
  /* = [
    {name: 'marguerite', price: 12, url:'https://www.atelierdeschefs.com/media/recette-e30299-pizza-pepperoni-tomate-mozza.jpg'},
    {name: 'bronx', price: 8, url:'https://image.afcdn.com/recipe/20170105/24149_w1024h768c1cx2592cy1728.jpg'},
  ]*/
  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.pizzaService
    .listPizzas()
    .subscribe( pizzas => this.pizzaParent= pizzas)
  }

}
