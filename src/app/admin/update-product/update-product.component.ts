import { Component, Inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { HeaderService } from 'src/app/services/header.service';
import { NewProductService } from 'src/app/services/new-product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {
  categories: any[] = [];
  colors = ['Red', 'White', 'Black', 'Yellow', 'Blue', 'Green', 'Purple'];
  size = ['S', 'M', 'L', 'XL', 'XXL'];
  productForm!: FormGroup;
  formValues: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private headerSer: HeaderService,
    private fb: FormBuilder,
    private newProdSer: NewProductService,
    private toastr: ToastrService,
    private router: Router,
    public dialog: MatDialogRef<ConfirmationComponent>,
    public matDialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getCategory();
    this.createProductForm();
  }

  createProductForm() {
    this.productForm = this.fb.group({
      name: [this.data?.name || '', [Validators.required]],
      price: [this.data?.price || '', [Validators.required]],
      category: [this.data?.category._id || '', [Validators.required]],
      quantity: [this.data?.quantity || ''],
      size: [this.data?.size || ''],
      color: [this.data?.color || ''],
      description: [this.data?.description || ''],
    });

    this.formValues = this.productForm.value;
    console.log(this.formValues);
  }

  get pName() {
    return this.productForm.get('name');
  }
  get price() {
    return this.productForm.get('price');
  }
  get category() {
    return this.productForm.get('category');
  }

  updateProduct() {
    let model = this.productForm.value;
    console.log(model);
    this.newProdSer
      .updateProduct(this.data._id, model)
      .subscribe((res: any) => {
        // console.log(res)
        this.toastr.success(res.message);
        this.dialog.close(true);
      });
  }

  getCategory() {
    this.headerSer.getCategory().subscribe((res: any) => {
      // console.log(res.doc);
      this.categories = res.doc;
    });
  }

  close() {
    let hasChanged = false;
    Object.keys(this.formValues).forEach((item: any) => {
      if (this.formValues[item] !== this.productForm.value[item]) {
        hasChanged = true;
      }
    });
    if (hasChanged) {
      const dialogRef = this.matDialog.open(ConfirmationComponent, {
        width: '60%',
        disableClose: true,
      });

      dialogRef.afterClosed().subscribe((result) => {});
    } else {
      this.dialog.close();
    }
  }
}
