import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


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
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { CoreModule } from './core/core.module';
import { RegisterComponent } from './components/register/register.component';




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
    DesignerAddProductComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
