import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaDetailsComponent } from './pizza-details/pizza-details.component';

const routes: Routes = [
  { path: 'pizza-details', component: PizzaDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
