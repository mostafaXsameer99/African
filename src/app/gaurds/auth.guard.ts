// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {

//   return true;
// };

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class authGuard implements CanActivate {

    constructor(private router:Router, private authService: LoginService, private toastr:ToastrService) {

    }

    canActivate(): boolean {

        if (!this.authService.isAuthenticate) {
          this.toastr.error('Please log in and try again')

            this.router.navigate(["login"]);
            return false;
        }

        return true;
    }

}




// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import {  UserAuthService } from '../Services/user-auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authService: UserAuthService, private router: Router) {}

//   canActivate(): boolean {
//     if (!this.authService.isAuthenticated()) {
//       this.router.navigate(['/login']);
//       return false;
//     }
//     return true;
//   }
// }
