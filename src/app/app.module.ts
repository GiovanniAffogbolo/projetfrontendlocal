import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { HttpClientModule }    from '@angular/common/http';
import { PizzaDetailsComponent } from './pizza-details/pizza-details.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

import { NgxPayPalModule } from 'ngx-paypal';
import { ApiModule } from './REST';

const appRoutes: Routes = [
  { 
    path: '',
    component: PizzaListComponent
  },

  { 
    path: 'pizzas/:id',
    component: PizzaDetailsComponent
  },

  { 
    path: 'pizzas',
    component: PizzaListComponent
  },

  { 
    path: '**',
    component: NotfoundComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaListComponent,
    PizzaDetailsComponent,
    NotfoundComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPayPalModule,
    ApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
