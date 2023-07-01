import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(environment.baseApi + 'users/allUsers');
  }

  changeRole(model: any, id: any) {
    return this.http.patch(
      environment.baseApi + `users/changeRole/${id}`,
      model
    );
  }

  deleteUser(id: any) {
    return this.http.delete(environment.baseApi + `users/deleteUser/${id}`);
  }
}
