import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }


  getAllOrders(){
    return this.http.get(environment.baseApi+"order")
  }

  saveOrder(model:any){
    return this.http.post(environment.baseApi+"order/addOrder",model)
  }

  changeQuantity(model:any,id:any){
    return this.http.patch(environment.baseApi + `products/changeQuantity/${id}`,model);
  }
}
