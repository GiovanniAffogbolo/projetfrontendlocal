import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../pizza';
import { Router } from '@angular/router';
//import { PizzaDetails } from '../pizza-details';
import { PizzaDetailsComponent } from '../pizza-details/pizza-details.component';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  @Input() pizza: Pizza

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
