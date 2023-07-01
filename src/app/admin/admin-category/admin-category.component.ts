import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { NewCategoryComponent } from '../new-category/new-category.component';
import { CategoryService } from 'src/app/services/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss'],
})
export class AdminCategoryComponent implements OnInit {
  categories: any[] = [];
  constructor(
    private headerSer: HeaderService,
    public dialog: MatDialog,
    private categorySer:CategoryService,
    private toastr:ToastrService
    ) {}
  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.headerSer.getCategory().subscribe((res: any) => {
      // console.log(res.doc)
      this.categories = res.doc;
    });
  }

  addNewCategory() {
    const dialogRef = this.dialog.open(NewCategoryComponent, {
      width: '80%',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        this.getCategory();
      }
    });
  }

  updateCategory(category: any) {
    const dialogRef = this.dialog.open(NewCategoryComponent, {
      width: '80%',
      data: category,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        this.getCategory();
      }
    });
  }

  deleteCategory(id:any){
    this.categorySer.deleteCategory(id).subscribe((res:any)=>{
      this.toastr.success(res.message)
      this.getCategory();
    })
  }
}
