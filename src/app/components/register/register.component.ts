import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userRegisterForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ser: RegisterService,
    private router: Router,
    private toastr: ToastrService,
  ) {

  }



  createForm() {
    this.userRegisterForm = this.fb.group({
      userName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]{3,}$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^01[0-9]{9}$/)]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
    });
  }



  ngOnInit() { this.createForm() }

  register() {
    console.log(this.userRegisterForm.value)
    this.ser.register(this.userRegisterForm.value).subscribe((res: any) => {
      localStorage.setItem('Token', res.token)
      this.toastr.success("success", "register success")
      this.router.navigate(['/login'])
    })

  }

  get userName() {
    return this.userRegisterForm.get('userName');
  }
  get email() {
    return this.userRegisterForm.get('email');
  }
  get password() {
    return this.userRegisterForm.get('password');
  }
  get confirmPassword() {
    return this.userRegisterForm.get('confirmPassword');
  }
  get phone() {
    return this.userRegisterForm.get('phone');
  }
  get address() {
    return this.userRegisterForm.get('address');
  }
}
