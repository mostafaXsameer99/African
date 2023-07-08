import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  colors = ['White', 'Black', 'Yellow', 'Blue', 'Green', 'Purple'];
  size = ['S', 'M', 'L', 'XL', 'XXL'];
  selectedModel: any;
  selectedColor: any;
  selectedSize: any;
  selectedPrice: any;
  minPrice: any;
  maxPrice: any;
  modelCollapsed = false;
  colorCollapsed = true;
  sizeCollapsed = true;
  PriceRangeCollapsed = false;
  categoryId: any;


  constructor(private productSer: AllProductService, private activatedRouter: ActivatedRoute
  ) {
    this.categoryId = this.activatedRouter.snapshot.paramMap.get('cid');
  }
  onMinInputChange(event: any) {
    this.minPrice = event.target.value;
    this.selectedPrice = this.minPrice;
  }
  onMaxInputChange(event: any) {
    this.maxPrice = event.target.value;
    this.selectedPrice = this.maxPrice;
  }
  togglemodelCollapsed() {
    this.modelCollapsed = !this.modelCollapsed;
  }
  togglecolorCollapsed() {
    this.colorCollapsed = !this.colorCollapsed;
  }
  togglesizeCollapsed() {
    this.sizeCollapsed = !this.sizeCollapsed;
  }
  togglePriceRangeCollapsed() {
    this.PriceRangeCollapsed = !this.PriceRangeCollapsed;
  }
  onRadioModelChange(e: any) {
  }
  getProductsByFilter() {
    this.productSer
      .getProductsByFilter(
        this.selectedColor,
        this.selectedSize,
        this.maxPrice,
        this.minPrice,
        this.selectedModel,
        this.categoryId
      )
      .subscribe(
        (res: any) => {
          this.productSer.productsArray = res.doc;
          // this.selectedSize = undefined;
          // this.selectedColor = undefined;
          // this.selectedPrice = undefined;
        },
        (error) => {
          this.productSer.productsArray = [];
          this.productSer.foundProduct = false;
        }
      );
  }
}