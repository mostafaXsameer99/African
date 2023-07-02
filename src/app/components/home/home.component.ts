import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private productSer: AllProductService, private router: Router) {

  }

  getProductsByCategory(id: any) {
    // console.log(id)
    this.productSer.getProductsByCategory(id).subscribe((res: any) => {
      this.productSer.productsArray = res.doc
      this.router.navigate(["/Products"])
      // console.log(res.doc)
    }, err => {
      this.productSer.productsArray = []
      // console.log("No Product")
      this.productSer.foundProduct = false
    })
  }


}
