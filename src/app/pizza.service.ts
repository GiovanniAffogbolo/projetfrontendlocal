import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pizza } from './pizza';
import { catchError, map, tap } from 'rxjs/operators';
  
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  
  private pizzaParams = [];
  URL = "https://lpa2sgadot.herokuapp.com"

  constructor(private messageService: MessageService ,private httpclient: HttpClient) { }

  public listPizzas(): Observable<Pizza[]> {
    return this.httpclient.get<Pizza[]>(this.URL + '/pizzas.json')
  }

  public getPizza(id: number): Observable<Pizza> {
    return this.httpclient.get<Pizza>(this.URL + `/pizzas/${id}.json`)
  }

  /*public getPizzaById(id: number): Observable<Pizza> {
    const url = `${this.URL}/pizzas/${id}.json`;
    console.log(url);
    return this.httpclient.get<Pizza>(url).pipe(
      tap(_ => this.log(`fetched pizza id=${id}`)),
      catchError(this.handleError<Pizza>(`getPizza id=${id}`))
    );
  }

  public getPizzaById(id: number) {
    const url = `${this.URL}/pizzas/${id}.json`;
    console.log(url);
    return this.httpclient.get(url).subscribe((res)=>{
      //console.log(res);
      let name = res["name"];
      let price = res["price"];
      let url = res["url"];
      //console.log(name, price, url);
      return this.pizzaParams[name = name, price = price, url = url ]
    });

  }*/

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`PizzaService: ${message}`);
  }
}
