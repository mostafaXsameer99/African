import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AllProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit, DoCheck {
  products: any = [];
  errMessage: any;
  cart: any[] = [];
  isAdded:boolean=false
  catID:any

  constructor(
    private service: AllProductService,
    private shoppingSer:ShoppingCartService,
    private toastr:ToastrService,
    private activatedRouter:ActivatedRoute
    ) {
  }
  ngDoCheck(): void {
    this.products = this.service.productsArray;
  }

  ngOnInit(): void {
    this.catID = this.activatedRouter.snapshot.paramMap.get('cid');
    console.log(this.catID)
    if(!this.catID){
      this.getAllProducts()
    }else {
      this.getProductsByCategory();
    }
  }


  getAllProducts() {
    this.service.getAllProducts().subscribe({
      next: (data:any) => {
        this.service.productsArray=data.products
        // this.products = this.service.productsArray;
        this.products = data.products;
        console.log(data.products)
    },

      error: err => this.errMessage = err
    });
  }

  getProductsByCategory(){
    this.service.getProductsByCategory(this.catID).subscribe((res:any)=>{
      console.log(res)
      this.products = res.doc;
      this.service.productsArray=res.doc
    })
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
          if (item.product._id == event._id) {
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
      }else {
        this.shoppingSer.shoppingCart.push(OrderObj);
      }
    }else{
      this.shoppingSer.shoppingCart.push(OrderObj)
    }
    this.toastr.success("Product Added Successfully")
  }
}
