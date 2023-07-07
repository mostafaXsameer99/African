import { Component, OnInit, Inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HeaderService } from 'src/app/services/header.service';
import { NewProductService } from 'src/app/services/new-product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss'],
})
export class AddNewProductComponent implements OnInit {
  imgUrl: any = '../../../assets/img/add1.png';
  imgsUrl: any[] = []
  categories: any[] = [];
  colors = ['Red', 'White', 'Black', 'Yellow', 'Blue','Green','Purple'];
  size = ['S', 'M', 'L', 'XL', 'XXL'];
  productForm!: FormGroup;
  selectedFile = '';
  formValues: any;

  selectedFiles: File[] = []

  constructor(
    private headerSer: HeaderService,
    private fb: FormBuilder,
    private newProdSer: NewProductService,
    private toastr: ToastrService,
    private router: Router,
    public dialog: MatDialogRef<ConfirmationComponent>,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log(this.selectedFiles);
    this.getCategory();
    this.createProductForm();
  }

  createProductForm() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      myfile: [ '', [Validators.required]],
      category: ['', [Validators.required]],
      quantity: [''],
      size: [''],
      color: [''],
      description: [''],
    });

    this.formValues = this.productForm.value;
    console.log(this.formValues)
  }


  get pName() {
    return this.productForm.get('name');
  }
  get price() {
    return this.productForm.get('price');
  }
  get image() {
    return this.productForm.get('myfile');
  }
  get category() {
    return this.productForm.get('category');
  }

  addProduct() {
    let model = this.prepereFormData();
    // console.log(this.productForm.value)
    // let formData = new FormData()
    // formData.append('name',this.productForm.value['name'])
    // formData.append('price',this.productForm.value['price'])
    // formData.append('category',this.productForm.value['category'])
    // formData.append('quantity',this.productForm.value['quantity'])
    // formData.append('size',this.productForm.value['size'])
    // formData.append('color',this.productForm.value['color'])
    // formData.append('description',this.productForm.value['description'])
    // formData.append('myfile',this.productForm.value['myfile'])

    this.newProdSer.addNewProduct(model).subscribe((res: any) => {
      console.log(res)
      this.toastr.success(res.message);
      this.dialog.close(true);
    });
  }

  prepereFormData() {
    let formData = new FormData();
    Object.entries(this.productForm.value).forEach(([key, value]: any) => {
      if (key == "myfile") {
          for (let i = 0; i < this.selectedFiles.length; i++) {
            formData.append('myfile', this.selectedFiles[i])
          }

      } else {
        formData.append(key, value);
      }
    });
    return formData;
  }



  getCategory() {
    this.headerSer.getCategory().subscribe((res: any) => {
      // console.log(res.doc);
      this.categories = res.doc;
    });
  }

  imgUpload(e: any) {
    this.selectedFile = e.target.files[0];
    console.log(e.target.files)
    this.selectedFiles = e.target.files;

    for (let i = 0; i < this.selectedFiles.length; i++) {

      this.productForm.get('myfile')?.setValue(this.selectedFiles[i]);
    }

    let reader = new FileReader();
    if (e.target.files && e.target.files.length > 0) {
      let file = e.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgUrl = reader.result;
      };
    }
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

      dialogRef.afterClosed().subscribe((result) => { });
    } else {
      this.dialog.close();
    }
  }
}
