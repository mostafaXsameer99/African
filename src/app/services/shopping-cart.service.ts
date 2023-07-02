import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  public shoppingCart:any[]=[]

  constructor(private http:HttpClient) {
   }
   public myData:any=[]

  getAllOrders(){
    return this.http.get( environment.baseApi+'order/user/orders')
  }
}
