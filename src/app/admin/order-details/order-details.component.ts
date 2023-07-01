import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  totalPrice:number=0
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialogRef<ConfirmationComponent>,
    public matDialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.calculateTotalPrice()
  }

  calculateTotalPrice(){
    console.log(this.data.product);
    this.data.product.forEach((item:any)=>{
      // console.log(item.quantity * item.product.price)
      this.totalPrice += item.quantity * item.product.price;
      // console.log(this.totalPrice)
    })
  }

  close(){
    this.dialog.close()
  }
}
