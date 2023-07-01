import { Injectable } from '@angular/core';
import { Iproduct } from '../Shared Classes And Types/iproduct';



@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  public productDetails:any[]=[]

  constructor() { }
}
