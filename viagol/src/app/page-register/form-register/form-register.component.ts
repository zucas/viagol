import { Component, OnInit } from '@angular/core';
import {User} from '../../interfaces/user';
import {UserService} from '../../_services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(user: User) {
    this.userService.createUser(user).then(() => {
      this.router.navigate(['/login']);
    });
  }

}
