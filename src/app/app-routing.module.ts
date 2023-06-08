import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartShoppingComponent } from './components/cart-shopping/cart-shopping.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:"",redirectTo:"/Products", pathMatch:"full"},
  { path: 'shoppingCart', component: CartShoppingComponent },
  { path: "Products", component: AllProductsComponent },
  {path:"productDetails",component:ProductDetailsComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
