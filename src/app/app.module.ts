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
  //{ path: 'pizza-details', component: PizzaDetailsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaListComponent,
    PizzaDetailsComponent,
    NotfoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    /*RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),*/
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
