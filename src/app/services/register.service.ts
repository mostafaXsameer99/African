import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  register(model: any) {
    return this.http.post("http://localhost:3000/users/signup", model)
  }
}
