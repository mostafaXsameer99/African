import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AllProductsComponent } from './components/all-products/all-products.component';

import { CartShoppingComponent } from './components/cart-shopping/cart-shopping.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    FilterComponent,
    CartShoppingComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
