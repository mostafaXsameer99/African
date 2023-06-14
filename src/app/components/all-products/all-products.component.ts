import { Component } from '@angular/core';
import { AllProductService } from 'src/app/services/all-product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {


  products: any = [];
  errMessage: any;
  cart: any[] = [];

  constructor(private service: AllProductService) {
  }

  ngOnInit(): void {
    this.getAllProducts()
  }


  getAllProducts() {
    this.service.getAllProducts().subscribe({
      next: data => this.products = data,
      error: err => this.errMessage = err
    });
  }

  addToCart(event: any) {
    if ("cart" in localStorage) {
      this.cart = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cart.find(item => item.id == event.id)
      if (exist) {
        console.log("Product is already in your cart")
      } else {
        this.cart.push(event)
        localStorage.setItem("cart", JSON.stringify(this.cart))
      }
    } else {
      this.cart.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cart))
    }
  }



}