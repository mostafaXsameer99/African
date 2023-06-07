import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartShoppingComponent } from './components/cart-shopping/cart-shopping.component';

const routes: Routes = [
  {path:'shoppingCart', component:CartShoppingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
