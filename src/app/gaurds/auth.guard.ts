import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class authGuard implements CanActivate {

    constructor(private router:Router, private authService: LoginService, private toastr:ToastrService) {

    }

    canActivate(): boolean {

        if (!localStorage.getItem("Token")) {
          this.toastr.error('Please log in and try again')

            this.router.navigate(["login"]);
            return false;
        }

        return true;
    }

}

