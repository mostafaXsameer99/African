import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartShoppingComponent } from './components/cart-shopping/cart-shopping.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  { path: 'shoppingCart', component: CartShoppingComponent },
  { path: "products", component: AllProductsComponent },
  {path:"productDetails",component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
