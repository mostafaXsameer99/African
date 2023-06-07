import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AllProductsComponent } from './all-products/all-products.component';
import { FilterComponent } from './filter/filter.component';

import { CartShoppingComponent } from './components/cart-shopping/cart-shopping.component';


@NgModule({
  declarations: [
    AppComponent,

    AllProductsComponent,
    FilterComponent,
    CartShoppingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
