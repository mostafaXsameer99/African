import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AllProductService {
  public productsArray: any[] = []
  public foundProduct: boolean = true
  constructor(private http: HttpClient) { }

  // private Url = '../../assets/static-data/products.json';//Json File For All Data
  private Url = environment.baseApi + "products";//Json File For All Data
  private p = '../../assets/static-data/p';

  getAllProducts() {
    return this.http.get(this.Url).pipe(catchError((err) => {
      return throwError(() => err.message || "ServerError")
    }))
  }

  getProduct(id: any) {
    return this.http.get(this.p + id + '.json').pipe(catchError((err) => {
      return throwError(() => err.message || "ServerError")
    }))
  }

  getProductsByCategory(id: any) {
    return this.http.get(environment.baseApi + "products/byCategory/" + id)
  }



  getProductBySearch(searchValue: any) {
    return this.http.get(environment.baseApi + `search?search=${searchValue}`)
  }


  getProductsByFilter(color: any, size: any, maxprice: any, minprice: any, model: any, categoryId: any) {
    return this.http.get(environment.baseApi + `search/filter?color=${color}&&size=${size}&&maxprice=${maxprice}&&minprice=${minprice}&&model=${model}&&categoryId=${categoryId}`)
  }


  deleteProduct(id: any) {
    return this.http.delete(environment.baseApi + `products/${id}`)
  }
}
