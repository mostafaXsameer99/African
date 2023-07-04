import { Injectable } from '@angular/core';
import { Iproduct } from '../Shared Classes And Types/iproduct';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';



@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {

  constructor(private http: HttpClient) {}
  getProductDetails(id:any) {
    return this.http.get(environment.baseApi+`products/${id}`)
  }
}
