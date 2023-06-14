import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AllProductService {
  constructor(private http: HttpClient) { }

  private Url = '../../assets/static-data/products.json';
  getAllProducts() {
    return this.http.get(this.Url).pipe(catchError((err) => {
      return throwError(() => err.message || "ServerError")
    }))
  }
}
