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
  isAdded:boolean=false

  constructor(
    private service: AllProductService,
    private shoppingSer:ShoppingCartService,
    private toastr:ToastrService,
    ) {
  }
  ngDoCheck(): void {
    this.products = this.service.productsArray;
  }
  ngOnChanges(changes: SimpleChanges): void {
    //  this.products = this.service.productsArray;
  }

  ngOnInit(): void {
    // this.getAllProducts()

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
    let OrderObj = {
      product:event,
      quantity:1
    }
    // this.shoppingSer.shoppingCart.push(OrderObj)
    console.log(this.shoppingSer.shoppingCart)
    let inCart = false
    if(this.shoppingSer.shoppingCart.length>=1){
      this.shoppingSer.shoppingCart.forEach((item:any)=>{
        if(item.product._id == event._id){
          inCart=true
          return
        }
      })
      if(inCart){
        this.shoppingSer.shoppingCart.forEach((item: any) => {
          if (item.product._id == event._id && item.quantity < item.product.quantity) {
            item.quantity++
            console.log(item.quantity)
            console.log(item.product.quantity);
            return;
          }else {
            this.toastr.error('Quantity Is Not Available');
          }
        });
      }else {
        this.shoppingSer.shoppingCart.push(OrderObj);
      }
    }else{
      this.shoppingSer.shoppingCart.push(OrderObj)
    }
    // console.log(this.shoppingSer.shoppingCart)
    this.toastr.success("Product Added Successfully")
  }







}
