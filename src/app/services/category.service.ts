import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  addCategory(model:any){
    return this.http.post(environment.baseApi + 'category/addCategory', model);
  }

  updateCategory(model:any,id:any){
    return this.http.patch(
      environment.baseApi + `category/updateCategory/${id}`,
      model
    );
  }

  deleteCategory(id:any){
    return this.http.delete(
      environment.baseApi + `category/deleteCategory/${id}`
    );
  }
}
