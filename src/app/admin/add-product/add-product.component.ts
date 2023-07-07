import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AllProductService } from 'src/app/services/product.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { AddNewProductComponent } from '../add-new-product/add-new-product.component';
import { UpdateProductComponent } from '../update-product/update-product.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  products: any[] = [];
  constructor(
    private ProductSer: AllProductService,
    private toastr: ToastrService,
    private router: Router,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.ProductSer.getAllProducts().subscribe((res: any) => {
      console.log(res.products)
      this.products = res.products;
    });
  }

  deleteProduct(id: any) {
    // console.log(id)
    this.ProductSer.deleteProduct(id).subscribe((res: any) => {
      this.toastr.success(res.message);
      // console.log(res)
      this.getAllProducts();
    });
  }
  updateProduct(product: any) {
    const dialogRef = this.dialog.open(UpdateProductComponent, {
      width: '80%',
      data: product,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result == true) {
        this.getAllProducts();
      }
    });
  }

  addNewProduct(){
    const dialogRef = this.dialog.open(AddNewProductComponent, {
      width: '80%',
      height: '100%',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        this.getAllProducts();
      }
    });
  }
}
