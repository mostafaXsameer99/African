import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { OrderDetailsComponent } from '../order-details/order-details.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];
  constructor(private orderSer: OrderService, public dialog: MatDialog) {}
  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {
    this.orderSer.getAllOrders().subscribe((res: any) => {
      this.orders = res.message;
    });
  }

  orderDetails(order: any) {
    const dialogRef = this.dialog.open(OrderDetailsComponent, {
      width: '80%',
      data: order,
      // disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
      }
    });
  }
  changeOrderStatus(id:any,state:any){
    if(state === "in progress"){
      let model={
        status:'Done'
      }
      this.orderSer.changeOrderStatus(model,id).subscribe((res:any)=>{
        this.getAllOrders()
      })
    }
  }

  getCurrentOrders(e:any){
    console.log(e.target.value)
    if(e.target.value === "All"){
      this.getAllOrders();
    }else {
      this.orderSer.getOrderByStatus(e.target.value).subscribe((res: any) => {
        console.log(res);
        this.orders=res.doc
      });
    }
  }
}
