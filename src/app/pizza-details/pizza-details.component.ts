import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent implements OnInit {

  name: string;
  price: number;
  url: string;
  URL = "https://lpa2sgadot.herokuapp.com"
  private pizzaParams = [];

  constructor(private route: ActivatedRoute, private pizzaService: PizzaService, private httpclient: HttpClient) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params =>{
        let id = +params.get('id'); // params retourne un type string. + : convertis le type string de retour de la fonction params en type number

        console.log(this.getPizzaById(id)[0]);
        
      });
  }

  public getPizzaById(id: number) {
    const url = `${this.URL}/pizzas/${id}.json`;
    console.log(url);
    return this.httpclient.get(url).subscribe((res)=>{
      //console.log(res);
      //this.pizzaParams = res;
      this.name = res["name"];
      this.price = res["price"];
      this.url = res["url"];
      //console.log(name, price, url);
      //return this.pizzaParams[name = name, price = price, url = url ]
    });

  }


}
