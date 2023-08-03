import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getAllOrders() {
    return this.http.get(environment.baseApi + 'order');
  }

  saveOrder(model: any) {
    return this.http.post(environment.baseApi + 'order/addOrder', model);
  }

  updateOrder(model: any, id: any) {
    return this.http.patch(
      environment.baseApi + `order/updateOrder/${id}`,
      model
    );
  }

  updateFullOrder(model: any, id: any) {
    return this.http.patch(
      environment.baseApi + `order/updateFullOrder/${id}`,
      model
    );
  }

  getCartFromDB(id: any) {
    return this.http.get(environment.baseApi + `order/${id}`);
  }

  changeQuantity(model: any, id: any) {
    return this.http.patch(
      environment.baseApi + `products/changeQuantity/${id}`,
      model
    );
  }

  changeOrderStatus(model:any,id:any){
    return this.http.patch(
      environment.baseApi + `order/changeOrderStatus/${id}`,
      model
    );
  }

  getOrderByStatus(orderStatus:any){
    return this.http.get(
      environment.baseApi + `order/orderStatus?orderStatus=${orderStatus}`
    );
  }
}
