import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_services/auth.service';
import {UserService} from '../../_services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {
  userName = '';
  userEmail = '';

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userName = this.authService.getCurrentUserName();
    this.userEmail = this.authService.getCurrentUserEmail();
  }

  editUser(newPassword: string): void {
    if (newPassword !== '') {
      this.userService.editUser({name: this.userName, password: newPassword, id: this.authService.getCurrentUserId()}).then(() => {
        this.authService.logout();
        this.router.navigate(['/login']);
      });
    } else {
      this.userService.editUser({name: this.userName, id: this.authService.getCurrentUserId()}).then(() => {
        this.authService.logout();
        this.router.navigate(['/login']);
      });
    }
  }

}
