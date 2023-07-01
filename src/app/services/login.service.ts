import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  public isAuthenticate:boolean=false

  constructor(private http:HttpClient) { }
  login(model:any){
    return this.http.post( environment.baseApi+"users/signIn",model)
  }
}
