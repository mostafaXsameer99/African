import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductDetailsService } from 'src/app/services/product-details.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() data: any = {};
  @Output() item = new EventEmitter();
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private prodDetailsSer: ProductDetailsService
  ) {}
  ngOnInit(): void {}

  add() {
    this.item.emit(this.data);
  }

  productDetails(data: any) {
    this.router.navigate(['productDetails',data._id]);
  }
}
