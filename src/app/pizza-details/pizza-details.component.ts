import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent implements OnInit {

  public payPalConfig?: PayPalConfig;
  
  URL = "https://lpa2sgadot.herokuapp.com"
  pizza: Pizza;
  
  //price = this.pizza.price;
  constructor(private route: ActivatedRoute, private pizzaService: PizzaService, private httpclient: HttpClient) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pizzaService.getPizza(id).subscribe(pizza => {
      this.pizza = pizza,
      this.initConfig();
    })

    //this.initConfig();
  }

  /*ngOnInit() {
    this.route.paramMap
      .subscribe(params =>{
        let id = +params.get('id'); // params retourne un type string. + : convertis le type string de retour de la fonction params en type number

        console.log(this.getPizzaById(id)[0]);
        this.initConfig();
      });
  }*/

  private initConfig(): void {
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'AeGo7iToRVb1YJ1SBYlupCKb13ebTo_BjQd_KYZWVt_-a_0I7pX4X_PaOzMBXIrX3GjEPjMGFb6gp-AI'
      },
      button: {
        label: 'paypal',
      },
      onPaymentComplete: (data, actions) => {
        console.log(data);
        
        //console.log('OnPaymentComplete');
      },
      onCancel: (data, actions) => {
        console.log('OnCancel');
      },
      onError: (err) => {
        console.log('OnError');
      },
      transactions: [{
        amount: {
          currency: 'EUR',
          total: this.pizza.price
        }
      }]
    });
  }

  /*public getPizzaById(id: number) {
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

  }*/


}
