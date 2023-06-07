import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  modelCollapsed = false;
  colorCollapsed = true;
  sizeCollapsed = true;
  PriceRangeCollapsed = true;

  togglemodelCollapsed() {
    this.modelCollapsed = !this.modelCollapsed;
  }
  togglecolorCollapsed () {
    this.colorCollapsed = !this.colorCollapsed;
  }
  togglesizeCollapsed () {
    this.sizeCollapsed = !this.sizeCollapsed;
  }
  togglePriceRangeCollapsed () {
    this.PriceRangeCollapsed = !this.PriceRangeCollapsed;
  }
}
