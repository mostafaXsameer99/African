import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http:HttpClient) { }


  getCategory(){
    return this.http.get(environment.baseApi+"category")
  }

}
