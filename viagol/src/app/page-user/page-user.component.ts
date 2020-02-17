import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.scss']
})
export class PageUserComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logoff(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
