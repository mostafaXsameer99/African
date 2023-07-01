import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm!:FormGroup
  constructor(
    private fb: FormBuilder,
    private ser: LoginService,
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {

  }
  ngOnInit(): void {
    this.createForm()
  }
  createForm(){
     this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/)]]
    })
  }

  login() {
    this.ser.login(this.loginForm.value).subscribe((res: any) => {
      // console.log(res.user[0].role)
      localStorage.setItem('role', res.user[0].role);
      localStorage.setItem('email', res.user[0].email);
      localStorage.setItem('Token', res.token)
      this.toastr.success(`welcome ${res.user[0].userName}`)
      if(localStorage.getItem("role")==="admin"){
        this.router.navigate(['/admin']);
      }else{
        this.router.navigate(['/'])
      }
      this.ser.isAuthenticate=true

    })
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
