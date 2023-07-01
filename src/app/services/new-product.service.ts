import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class NewProductService {
  constructor(private http: HttpClient) {}

  addNewProduct(model: any) {
    return this.http.post(environment.baseApi + 'products/addProduct', model);
  }

  updateProduct(id: any, model: any) {
    return this.http.patch(environment.baseApi + `products/${id}`, model);
  }
}
