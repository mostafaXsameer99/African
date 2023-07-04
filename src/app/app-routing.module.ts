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
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './gaurds/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AddNewProductComponent } from './admin/add-new-product/add-new-product.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { UsersComponent } from './admin/users/users.component';
import { adminGuardGuard } from './gaurds/admin-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'shoppingCart',
    component: CartShoppingComponent,
    canActivate: [authGuard],
  },

  { path: 'Products', component: AllProductsComponent },
  { path: 'Products/:cid', component: AllProductsComponent },

  // { path: 'productDetails', component: ProductDetailsComponent },
  { path: 'productDetails/:pid', component: ProductDetailsComponent },
  {
    path: 'admin',
    component: SidebarComponent,
    children: [
      { path: '', redirectTo: '/admin/product', pathMatch: 'full' },
      { path: 'product', component: AddProductComponent },
      { path: 'category', component: AdminCategoryComponent },
      { path: 'order', component: OrdersComponent },
      { path: 'users', component: UsersComponent },
    ],
    canActivate: [adminGuardGuard],
  },
  {
    path: 'designerDashboard',
    component: DesignerNavbarComponent,
    children: [
      { path: 'home', component: DesignerDashboardComponent },
      { path: 'allDesigns', component: AllDesignsComponent },
      { path: 'addProduct', component: DesignerAddProductComponent },
      // add more routes as needed
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
