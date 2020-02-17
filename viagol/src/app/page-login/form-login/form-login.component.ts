import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../_services/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
  }

  onClickRegister() {
    this.router.navigate(['/registrar']);
  }

  onClickLogin(email: string, password: string) {
    this.authService.doLogin({email, password}).then(() => {
      if (this.authService.isAuth()) {
        this.router.navigate(['/minhas-viagens']);
      }
    });
  }

}
