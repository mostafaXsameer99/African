import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartShoppingComponent } from './components/cart-shopping/cart-shopping.component';
import { AllProductsComponent } from './components/all-products/all-products.component';

const routes: Routes = [
  {path:'shoppingCart', component:CartShoppingComponent},
  {path:"products", component:AllProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
