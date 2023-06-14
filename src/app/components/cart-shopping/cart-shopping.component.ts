import { Component } from '@angular/core';

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

  ngOnInit(): void {
    this.getCart()
    this.calculateTotal();
    this.calculateTotalSale();
  }



  selectSize(size: string) {
    this.selectedSize = size;
  }
  removeItem(id: any) {
    const index = this.cart.findIndex(item => item.id === id);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.calculateTotal();
      this.calculateTotalSale();
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
  plusOne(id: number) {
    const item = this.cart.find(item => item.id === id);
    if (item) {
      item.orderCount++;
      this.calculateTotal();
      this.calculateTotalSale();
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  minusOne(id: number) {
    const item = this.cart.find(item => item.id === id);
    if (item && item.orderCount > 1) {
      item.orderCount--;
      this.calculateTotal();
      this.calculateTotalSale();
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  completeOrder() {
    console.log("send data to database");
  }

  getCart() {
    if ("cart" in localStorage) {
      this.cart = JSON.parse(localStorage.getItem("cart")!)
    }
  }

  calculateTotal(): void {
    let total = 0;

    for (const item of this.cart) {
      total += item.orderCount * item.price;
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
      total += item.orderCount * item.salePrice;
    }

    if (total > 600) {
      this.totalSale = total;
    } else {
      this.totalSale = total + 60;
    }
  }

}
