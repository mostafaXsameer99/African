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
<<<<<<< HEAD

  loginForm!:FormGroup
=======
  loginForm!: FormGroup
>>>>>>> 21546e0b09756d0190adf50cebb6df4bc5926aa4
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
<<<<<<< HEAD
  createForm(){
     this.loginForm = this.fb.group({
=======
  createForm() {
    this.loginForm = this.fb.group({
>>>>>>> 21546e0b09756d0190adf50cebb6df4bc5926aa4
      email: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/)]]
    })
  }

  login() {
    this.ser.login(this.loginForm.value).subscribe((res: any) => {
      localStorage.setItem('Token', res.token)
      this.toastr.success("success", "login success")
      this.router.navigate(['/'])
<<<<<<< HEAD
      this.ser.isAuthenticate=true

=======
>>>>>>> 21546e0b09756d0190adf50cebb6df4bc5926aa4
    })
  }

<<<<<<< HEAD
=======

>>>>>>> 21546e0b09756d0190adf50cebb6df4bc5926aa4
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
<<<<<<< HEAD

=======
>>>>>>> 21546e0b09756d0190adf50cebb6df4bc5926aa4
}
