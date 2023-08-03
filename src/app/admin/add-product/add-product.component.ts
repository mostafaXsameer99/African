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
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  constructor(
    private service: AllProductService,
    private headerSer: HeaderService,
    private ProductSer: AllProductService,
    private toastr: ToastrService,
    private router: Router,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getAllProducts();
    this.getCategory();
  }

  getAllProducts() {
    this.ProductSer.getAllProducts().subscribe((res: any) => {
      this.products = res.products;
    });
  }

  getCategory() {
    this.headerSer.getCategory().subscribe((res: any) => {
      // console.log(res.doc);
      this.categories = res.doc;
    });
  }
  getProductsByCayegory(e: any) {
    if (e.target.value == 'All') {
      this.getAllProducts();
    } else {
      this.service
        .getProductsByCategory(e.target.value)
        .subscribe((res: any) => {
          this.products = res.doc;
        });
    }
  }

  deleteProduct(id: any) {
    this.ProductSer.deleteProduct(id).subscribe((res: any) => {
      this.toastr.success(res.message);
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
      if (result == true) {
        this.getAllProducts();
      }
    });
  }

  addNewProduct() {
    const dialogRef = this.dialog.open(AddNewProductComponent, {
      width: '70%',
      height: '70%',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        this.getAllProducts();
      }
    });
  }

  searchProducts(e: any) {
    // console.log(ali)
    this.service.getProductBySearch(e.target.value).subscribe(
      (res: any) => {
        this.products = res.doc;
      }
    );
  }
}
