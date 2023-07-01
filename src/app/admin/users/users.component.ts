import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  constructor(
    private usersSer: UsersService,
    private toatr: ToastrService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.usersSer.getAllUsers().subscribe((res: any) => {
      console.log(res.users);
      this.users = res.users;
    });
  }

  updateUser(user: any) {
    const dialogRef = this.dialog.open(UpdateUserComponent, {
      width: '80%',
      data: user,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        this.getAllUsers();
      }
    });
  }

  deleteUser(id: any,email:any) {
    if(localStorage.getItem("email") == email) {
      this.toatr.error("Not Allowed To Delete YourSelf")
      return
    }
    this.usersSer.deleteUser(id).subscribe((res: any) => {
      this.toatr.success(res.message);
      this.getAllUsers();
    });
  }
}
