import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent {

  selectedSize: string = '';
  overlayVisible: string = '';
  productId!: any;
  product: any = {};
  errMessage: any;

  constructor(private route: ActivatedRoute, private service: AllProductService) {
    this.productId = this.route.snapshot.paramMap.get('id');
    console.log(this.productId);

  }
  ngOnInit(): void {
    this.getProduct()
  }

  selectSize(size: string) {
    this.selectedSize = size;
    console.log('Selected size:', this.selectedSize);
  }

  openOverlay(event: Event, overlayId: string): void {
    event.preventDefault();
    this.overlayVisible = overlayId;
  }

  closeOverlay(): void {
    this.overlayVisible = '';
  }


  getProduct() {
    this.service.getProduct(this.productId).subscribe({
      next: data => this.product = data,
      error: err => console.log(err)
    })
  }
}