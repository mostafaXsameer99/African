import { Component } from '@angular/core';
import { AllProductService } from 'src/app/services/all-product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {

  // image1: String = "assets/img/item1_model.webp"
  // image2: String = "assets/img/item2_model.webp"
  // image3: String = "assets/img/item3_model.webp"
  // image4: String = "assets/img/item4_model.webp"


  products:any = [];
  errMessage:any;
  constructor(private service:AllProductService) {
    // this.products = [
    //   {
    //     id: 1,
    //     name: "Comfort Fit Crew Neck T-Shirt",
    //     price: 600,
    //     image: this.image1,
    //     sale: true,
    //     salePrice: 399
    //   },
    //   {
    //     id: 1,
    //     name: "Comfort Fit  Crew Neck T-Shirt",
    //     price: 800,
    //     image: this.image2,
    //     sale: true,
    //     salePrice: 500
    //   },
    //   {
    //     id: 1,
    //     name: "Comfort Fit  Crew Neck T-Shirt",
    //     price: 700,
    //     image: this.image3,
    //     sale: true,
    //     salePrice: 450
    //   },
    //   {
    //     id: 1,
    //     name: "Relax Fit Crew Neck T-Shirt",
    //     price: 494,
    //     image: this.image4,
    //     sale: true,
    //     salePrice: 405
    //   },
      
    // ]
  }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe({
      next: data => this.products = data,
      error: err => this.errMessage = err
    });
  }


}
