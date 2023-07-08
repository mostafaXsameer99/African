import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FileUploadModule } from 'ng2-file-upload';
import {MatDialogModule} from '@angular/material/dialog'
import { NgxPaginationModule } from 'ngx-pagination';


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
import { authGuard } from './gaurds/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AddNewProductComponent } from './admin/add-new-product/add-new-product.component';
import { OrdersComponent } from './admin/orders/orders.component';

import { ConfirmationComponent } from './admin/confirmation/confirmation.component';
import { NewCategoryComponent } from './admin/new-category/new-category.component';
import { UsersComponent } from './admin/users/users.component';
import { OrderDetailsComponent } from './admin/order-details/order-details.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { adminGuardGuard } from './gaurds/admin-guard.guard';
import { UpdateProductComponent } from './admin/update-product/update-product.component';




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
    RegisterComponent,
    SidebarComponent,
    AddProductComponent,
    AdminCategoryComponent,
    AddNewProductComponent,
    OrdersComponent,
    ConfirmationComponent,
    NewCategoryComponent,
    UsersComponent,
    OrderDetailsComponent,
    UpdateUserComponent,
    UpdateProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    CoreModule,
    FileUploadModule,
    MatDialogModule,
    NgxPaginationModule,
  ],
  exports: [NgxPaginationModule],
  providers: [authGuard, adminGuardGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
