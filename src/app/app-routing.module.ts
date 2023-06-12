import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartShoppingComponent } from './components/cart-shopping/cart-shopping.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DesignerDashboardComponent } from './components/designer-dashboard/designer-dashboard.component';
import { AllDesignsComponent } from './components/all-designs/all-designs.component';
import { DesignerNavbarComponent } from './components/designer-navbar/designer-navbar.component';
import { DesignerAddProductComponent } from './components/designer-add-product/designer-add-product.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {path:'home',component:HomeComponent},
  { path: 'shoppingCart', component: CartShoppingComponent },
  { path: "Products", component: AllProductsComponent },
  { path: "productDetails", component: ProductDetailsComponent },
  {
    path: 'designerDashboard', component: DesignerNavbarComponent,
    children: [
      { path: 'home', component: DesignerDashboardComponent },
      { path: 'allDesigns', component: AllDesignsComponent },
      { path: 'addProduct', component: DesignerAddProductComponent },
      // add more routes as needed
    ]
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
