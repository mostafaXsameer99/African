import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { Toast, ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/services/order.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-cart-shopping',
  templateUrl: './cart-shopping.component.html',
  styleUrls: ['./cart-shopping.component.scss']
})
export class CartShoppingComponent {
  selectedSize: string = '';
  Quantity: number = 1;
  count: number = 1
  cart: any[] = [];
  subTotal: number = 0
  total: number = 0;
  notAllowed: boolean = true

  constructor(
    private shoppingSer: ShoppingCartService,
    private http: HttpClient,
    private orderSer: OrderService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getCart()
    this.calculateTotal();
  }

  calculateTotal(): void {
    let total = 0;
    for (const item of this.cart) {
      total += item.Quantity * item.price;
    }


    this.subTotal = total;
    if (this.subTotal < 601) {
      this.total = total + 60;
    } else {
      this.total = this.subTotal
    }
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  removeItem(id: any) {
    this.cart.map((item: any, index: any) => {
      if (item._id == id) {
        this.calculateTotal();
        return this.cart.splice(index, 1);


      } else {
        return this.cart;
      }
    })

  }
  plusOne(id: number) {
    const item = this.cart.find(item => item._id === id);
    // console.log(item)
    if (item) {
      item.Quantity++;
      this.calculateTotal();
    }
  }

  minusOne(id: number) {
    const item = this.cart.find(item => item._id === id);
    if (item && item.Quantity > 1) {
      item.Quantity--;
      this.calculateTotal();
    }
  }





  completeOrder() {
    this.http.post('http://localhost:3000/checkout', {
      cart: this.cart
    }).subscribe(async (res: any) => {
      let stripe = await loadStripe('pk_test_51MQCBUEwQJXCe3Mmc3FzTRZYqCMdD0Zuv4DOLtIGqNgPleXebjlaiU7YTIqWPkIk1AW3smZQAqZQDalZIwWqyqXC00fjMq75eL')
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    })
  }

  safeOrder() {
    let productId = this.cart.map((item: any) => {
      return { product: item._id, quantity: item.Quantity }
    })
    let model = {
      product: productId,
    };
    this.orderSer.saveOrder(model).subscribe((res: any) => {
      this.notAllowed = false
      this.toastr.success("order saved successfully")
      // console.log(res)
    })
  }

  getCart() {

    this.cart = this.shoppingSer.shoppingCart.map((item: any) => {
      item.product.Quantity = item.quantity
      return item.product
    })
  }
}