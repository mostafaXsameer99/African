import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() data: any = {}
  @Output() item = new EventEmitter()

  add() {
    this.item.emit(this.data)
  }
}