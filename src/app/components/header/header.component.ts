import { Component, DoCheck, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';
import { LoginService } from 'src/app/services/login.service';
import { AllProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  isAuthenticate: boolean = false
  categories: any[] = []
  searchInput: any
  isAdmin = localStorage.getItem("role");
  constructor(
    private logService: LoginService,
    private haederSer: HeaderService,
    private productSer: AllProductService,
    private router: Router
  ) {

  }
  ngDoCheck(): void {
    if (localStorage.getItem("Token")) {
      this.isAuthenticate = true
    } else {
      this.isAuthenticate = false
    }
  }
  ngOnInit(): void {
    this.getCategory()
  }

  getCategory() {
    this.haederSer.getCategory().subscribe((res: any) => {
      // console.log(res)
      this.categories = res.doc
      // console.log(this.categories[0].name)
    })
  }

  logout() {
    localStorage.removeItem("Token")
    localStorage.removeItem("role")
    localStorage.removeItem('email');
    this.logService.isAuthenticate = false
    console.log(this.logService.isAuthenticate)
  }



  getProductsByCategory(id: any) {
    // console.log(id)
    this.productSer.getProductsByCategory(id).subscribe((res: any) => {
      this.productSer.productsArray = res.doc
      // console.log(res.doc)

    }, err => {
      this.productSer.productsArray = []
      // console.log("No Product")
      this.productSer.foundProduct = false
    })
  }


  searchProducts(searchValue: any) {
    // console.log(ali)
    this.productSer.getProductBySearch(searchValue).subscribe((res: any) => {
      // console.log(res.doc)
      this.router.navigate(['/Products'])
      this.productSer.productsArray = res.doc
    }, err => {
      this.productSer.productsArray = []
      this.productSer.foundProduct = false
    })
  }

}
