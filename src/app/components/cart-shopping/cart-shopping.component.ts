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
  selectedSize: string = 'M';
  Quantity: number = 1;
  count: number = 1
  cart: any[] = [];
  total: number = 0
  totalSale: number = 0
  notAllowed:boolean=true

  constructor(
    private shoppingSer:ShoppingCartService,
    private http:HttpClient,
    private orderSer:OrderService,
    private toastr: ToastrService,
    ){}

  ngOnInit(): void {
    this.getCart()
    this.calculateTotal();
    this.calculateTotalSale();
  }



  selectSize(size: string) {
    this.selectedSize = size;
  }
  removeItem(id: any) {
    console.log(id)
    console.log(this.cart)
    this.cart.map((item:any, index:any)=>{
      if (item._id == id){
        return this.cart.splice(index, 1);
          this.calculateTotal();
          this.calculateTotalSale();
      }else {
        return this.cart;
      }
    })
    // const index = this.cart.findIndex(item => item.id === id);
    // if (index !== -1) {
    //   this.cart.splice(index, 1);
    //   this.calculateTotal();
    //   this.calculateTotalSale();
    //   localStorage.setItem('cart', JSON.stringify(this.cart));
    // }
  }
  plusOne(id: number) {
    const item = this.cart.find(item => item._id === id);
    // console.log(item)
    if (item) {
      item.Quantity++;
      this.calculateTotal();
      this.calculateTotalSale();
      // localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  minusOne(id: number) {
    const item = this.cart.find(item => item._id === id);
    if (item && item.Quantity > 1) {
      item.Quantity--;
      this.calculateTotal();
      this.calculateTotalSale();
      // localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    console.log(item);
  }





  completeOrder() {
    this.http.post('http://localhost:3000/checkout',{
      cart:this.cart
    }).subscribe(async(res:any)=>{
      let stripe = await loadStripe('pk_test_51MQCBUEwQJXCe3Mmc3FzTRZYqCMdD0Zuv4DOLtIGqNgPleXebjlaiU7YTIqWPkIk1AW3smZQAqZQDalZIwWqyqXC00fjMq75eL')
      stripe?.redirectToCheckout({
        sessionId:res.id
      })
    })
  }

  safeOrder(){
    // console.log(this.cart)
    // console.log(this.shoppingSer.shoppingCart);
    let productId = this.cart.map((item:any)=>{
      return {product:item._id,quantity:item.Quantity}
    })
    let model = {
      product: productId,
    };
    // console.log(model2);


    // let productId = this.shoppingSer.shoppingCart.map((item:any)=>{
    //   return {product:item.product._id,quantity:item.quantity}
    // })
    // let model = {
    //   product:productId
    // }
    // console.log(model)
    this.orderSer.saveOrder(model).subscribe((res:any)=>{
      this.notAllowed=false
      this.toastr.success("order saved successfully")
      console.log(res)
    })


  }

  getCart() {
    // console.log(this.shoppingSer.shoppingCart)
    this.cart=this.shoppingSer.shoppingCart.map((item:any)=>{
      item.product.Quantity=item.quantity
      return item.product
    })
    console.log(this.cart)
  }

  calculateTotal(): void {
    let total = 0;

    for (const item of this.cart) {
      total += item.Quantity * item.price;
    }

    if (total > 600) {
      this.total = total;
    } else {
      this.total = total + 60;
    }

  }

  calculateTotalSale(): void {
    let total = 0;

    for (const item of this.cart) {
      total += item.Quantity * item.price;
    }

    if (total > 600) {
      this.totalSale = total;
    } else {
      this.totalSale = total + 60;
    }
  }

}
