import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductDetailsService } from 'src/app/services/product-details.service';
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
    private activatedRoute: ActivatedRoute,
    private productDetailsSer: ProductDetailsService,
    private shoppingSer: ShoppingCartService,
    private toastr: ToastrService,
    private router:Router
  ) {

  }
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('pid');
    this.getProductDetails();
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

  getProductDetails() {
    this.productDetailsSer.getProductDetails(this.productId).subscribe((res:any)=>{
      // console.log(res)
      this.product=res.product[0]
    })
  }

  addToCard(product: any) {
    if (localStorage.getItem('Token')) {
      let OrderObj = {
        product: product,
        quantity: 1,
      };
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
              if (item.quantity < item.product.quantity) {
                item.quantity++;
                console.log(item.quantity);
                console.log(item.product.quantity);
              } else {
                this.toastr.error('Quantity Is Not Available');
              }
              return;
            }
          });
        } else {
          this.shoppingSer.shoppingCart.push(OrderObj);
        }
      } else {
        this.shoppingSer.shoppingCart.push(OrderObj);
      }
      this.toastr.success('Product Added Successfully');
    } else {
      this.toastr.error('login and try again');
      this.router.navigate(['/login']);
    }
  }
}
