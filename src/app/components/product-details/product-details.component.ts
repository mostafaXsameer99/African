import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductDetailsService } from 'src/app/services/product-details.service';
import { AllProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  selectedSize: string = '';
  overlayVisible: string = '';
  productId!: any;
  product: any = {};
  errMessage: any;

  constructor(
    private route: ActivatedRoute,
    private service: AllProductService,
    private productDetailsSer: ProductDetailsService,
    private shoppingSer: ShoppingCartService,
    private toastr: ToastrService
  ) {
    this.productId = this.route.snapshot.paramMap.get('id');
    console.log(this.productId);
  }
  ngOnInit(): void {
    // this.getProduct()
    this.product = this.productDetailsSer.productDetails;
  }

  selectSize(size: string) {
    this.selectedSize = size;
    console.log('Selected size:', this.selectedSize);
  }

  // openOverlay(event: Event, overlayId: string): void {
  //   event.preventDefault();
  //   this.overlayVisible = overlayId;
  // }

  // closeOverlay(): void {
  //   this.overlayVisible = '';
  // }

  getProduct() {
    this.service.getProduct(this.productId).subscribe({
      next: (data) => (this.product = data),
      error: (err) => console.log(err),
    });
  }

  addToCard(product: any) {
    let OrderObj = {
      product: product,
      quantity: 1,
    };
    // this.shoppingSer.shoppingCart.push(OrderObj)
    // console.log(this.shoppingSer.shoppingCart);
    let inCart = false;
    if (this.shoppingSer.shoppingCart.length >= 1) {
      this.shoppingSer.shoppingCart.forEach((item: any) => {
        if (item.product._id == product._id) {
          inCart = true;
          return;
        }
      });

      if (inCart) {
        this.shoppingSer.shoppingCart.forEach((item: any) => {
          if (item.product._id == product._id) {
            item.quantity++;
            return;
          }
        });
      } else {
        this.shoppingSer.shoppingCart.push(OrderObj);
      }
    } else {
      this.shoppingSer.shoppingCart.push(OrderObj);
    }
    // console.log(this.shoppingSer.shoppingCart)
    this.toastr.success('Product Added Successfully');
  }
}
