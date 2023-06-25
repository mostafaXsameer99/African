import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() data: any = {}
  @Output() item = new EventEmitter()
  constructor(
    private toastr:ToastrService
  ){}

  add() {
    this.item.emit(this.data)
  }
}
