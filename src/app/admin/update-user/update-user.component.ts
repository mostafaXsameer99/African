import { Component, Inject, OnInit } from '@angular/core';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  userUpdateForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private userSer: UsersService,
    public dialog: MatDialogRef<ConfirmationComponent>,
    private toastr:ToastrService
  ) {}
  ngOnInit(): void {
    console.log(this.data);
    this.createForm();
  }

  createForm() {
    this.userUpdateForm = this.fb.group({
      // userName: [this.data.userName || ''],
      // email: [this.data.email || ''],
      // phone: [this.data.phone || ''],
      // address: [this.data.address || ''],
      // password: [''],
      role: [this.data.role || ''],
    });
  }

  get userName() {
    return this.userUpdateForm.get('userName');
  }
  get email() {
    return this.userUpdateForm.get('email');
  }
  get phone() {
    return this.userUpdateForm.get('phone');
  }
  get address() {
    return this.userUpdateForm.get('address');
  }
  get password() {
    return this.userUpdateForm.get('password');
  }

  get role() {
    return this.userUpdateForm.get('role');
  }

  update() {
    console.log(this.userUpdateForm.value);
    this.userSer
      .changeRole(this.userUpdateForm.value, this.data._id)
      .subscribe((res: any) => {
        console.log(res);
        this.toastr.success(res.message);
        this.dialog.close(true);
      });
  }
  close() {
    this.dialog.close();
  }
}
