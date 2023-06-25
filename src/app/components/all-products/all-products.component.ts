import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AllProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit, OnChanges, DoCheck {


  products: any = [];
  errMessage: any;
  cart: any[] = [];

  constructor(
    private service: AllProductService,
    private shoppingSer:ShoppingCartService,
    private toastr:ToastrService
    ) {
  }
  ngDoCheck(): void {
    this.products = this.service.productsArray;
  }
  ngOnChanges(changes: SimpleChanges): void {
     this.products = this.service.productsArray;
  }

  ngOnInit(): void {
    this.getAllProducts()

  }


  getAllProducts() {
    this.service.getAllProducts().subscribe({
      next: (data:any) => {
        this.service.productsArray=data.products.doc
        this.products = this.service.productsArray;
        // this.products=data
    },

      error: err => this.errMessage = err
    });
  }

  addToCart(event: any) {
    // if ("cart" in localStorage) {
    //   this.cart = JSON.parse(localStorage.getItem("cart")!)
    //   let exist = this.cart.find(item => item.id == event.id)
    //   if (exist) {
    //     console.log("Product is already in your cart")
    //   } else {
    //     this.cart.push(event)
    //     localStorage.setItem("cart", JSON.stringify(this.cart))
    //   }
    // } else {
    //   this.cart.push(event)
    //   localStorage.setItem("cart", JSON.stringify(this.cart))
    // }
    event.Quantity=1
    this.shoppingSer.shoppingCart.push(event)

  }



}
