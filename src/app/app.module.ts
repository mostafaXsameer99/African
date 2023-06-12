import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AllProductsComponent } from './components/all-products/all-products.component';

import { CartShoppingComponent } from './components/cart-shopping/cart-shopping.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DesignerDashboardComponent } from './components/designer-dashboard/designer-dashboard.component';
import { AllDesignsComponent } from './components/all-designs/all-designs.component';
import { DesignerNavbarComponent } from './components/designer-navbar/designer-navbar.component';
import { DesignerAddProductComponent } from './components/designer-add-product/designer-add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    FilterComponent,
    CartShoppingComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    DesignerDashboardComponent,
    AllDesignsComponent,
    DesignerNavbarComponent,
    DesignerAddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
