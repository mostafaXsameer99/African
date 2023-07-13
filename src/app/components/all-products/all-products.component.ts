import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AllProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit, DoCheck {
  products: any = [];
  errMessage: any;
  cart: any[] = [];
  isAdded: boolean = false
  catID: any
  currentPage = 1;
  productsPerPage = 8;

  constructor(
    private service: AllProductService,
    private shoppingSer: ShoppingCartService,
    private toastr: ToastrService,
    private activatedRouter: ActivatedRoute,
    // private scrollToService: ScrollToService
    private router:Router
  ) {
  }

  ngDoCheck(): void {
    this.products = this.service.productsArray;
  }

  ngOnInit(): void {
    this.catID = this.activatedRouter.snapshot.paramMap.get('cid');
    console.log(this.catID)
    if (!this.catID) {
      this.getAllProducts()
    } else {
      this.getProductsByCategory();
    }
  }

  getAllProducts() {
    this.service.getAllProducts().subscribe({
      next: (data: any) => {
        this.service.productsArray = data.products
        // this.products = this.service.productsArray;
        this.products = data.products;
        console.log(data.products)
      },
      error: err => this.errMessage = err
    });
  }

  getProductsByCategory() {
    this.service.getProductsByCategory(this.catID).subscribe((res: any) => {
      console.log(res)
      this.products = res.doc;
      this.service.productsArray = res.doc
    })
  }

  addToCart(event: any) {
    if(localStorage.getItem("Token")){

      let OrderObj = {
        product:event,
        quantity:1
      }

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
    }else{
      this.toastr.error("login and try again")
      this.router.navigate(['/login'])
    }
  }

  next() {
    this.currentPage++;
    // this.scrollTo();
  }

  prev() {
    this.currentPage--;
    // this.scrollTo();
  }

  isPrevDisabled() {
    return this.currentPage === 1;
  }

  isNextDisabled() {
    return this.currentPage === Math.ceil(this.products.length / this.productsPerPage);
  }
  // scrollTo() {
  //   this.scrollToService.scrollTo({ target: 'top', duration: 500 });
  // }
}
