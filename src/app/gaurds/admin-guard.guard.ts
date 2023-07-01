// import { CanActivateFn } from '@angular/router';

// export const adminGuardGuard: CanActivateFn = (route, state) => {

//   return true;
// };


import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class adminGuardGuard implements CanActivate {
  constructor(
    private router: Router,
    private toastr: ToastrService
  ) {}

  canActivate(): boolean {
    if (localStorage.getItem("role") !== "admin") {
      this.toastr.error('Not Allowed');

      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
