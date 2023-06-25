import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AllProductService {
  constructor(private http: HttpClient) { }

  private Url = '../../assets/static-data/products.json'; //Json File For All Data
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
}