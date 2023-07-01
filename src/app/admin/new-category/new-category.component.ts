import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss'],
})
export class NewCategoryComponent implements OnInit {
  categoryForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialog: MatDialogRef<NewCategoryComponent>,
    public matDialog: MatDialog,
    private categorySer:CategoryService,
    private toastr:ToastrService
  ) {}
  ngOnInit(): void {
    this.createCategoryForm()
  }

  createCategoryForm() {
    this.categoryForm = this.fb.group({
      name: [this.data?.name || '', [Validators.required]],
    });
  }

  get catName() {
    return this.categoryForm.get('name');
  }

  addCategory() {
    // console.log(this.categoryForm.value)
    this.categorySer.addCategory(this.categoryForm.value).subscribe((res:any)=>{
      // console.log(res)
      this.toastr.success(res.message)
      this.dialog.close(true);
    })
  }
  updateCategory() {
    this.categorySer.updateCategory(this.categoryForm.value,this.data._id).subscribe((res:any)=>{
      this.toastr.success(res.message);
      this.dialog.close(true);
    })
  }
  close() {
    this.dialog.close();
  }
}
