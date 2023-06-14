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
  cart: any[] = [1,2];

  get cartSize(): number {
    console.log(this.cart.length);

    return this.cart.length;
  }

  selectSize(size: string) {
    this.selectedSize = size;
    console.log('Selected size:', this.selectedSize);
  }
  removeItem(id: any) {
    console.log('Remove item', event);
  }
  plusOne() {
    this.Quantity++;
  }
  minusOne() {
    if (this.Quantity > 1) { this.Quantity--; }
  }
  completeOrder() {
    console.log("send data to database");

  }
}
