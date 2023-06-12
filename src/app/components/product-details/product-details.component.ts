import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  selectedSize: string = ''; // Initially no size is selected
  overlayVisible: string = '';

  openOverlay(event: Event, overlayId: string): void {
    event.preventDefault();
    this.overlayVisible = overlayId;
  }

  closeOverlay(): void {
    this.overlayVisible = '';
  }

  selectSize(size: string) {
    this.selectedSize = size;
    console.log('Selected size:', this.selectedSize);
  }

}
