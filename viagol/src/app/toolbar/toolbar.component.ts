import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  userName: string;

  ngOnInit(): void {
    this.userName = this.authService.getCurrentUserName();
  }

  goToUserPage() {
    this.router.navigate(['/user']);
  }
  goToMyTravelsPage() {
    this.router.navigate(['/minhas-viagens']);
  }

}
