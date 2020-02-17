import {Component, Inject, OnInit} from '@angular/core';
import {TravelsService} from '../../_services/travels.service';
import {AuthService} from '../../_services/auth.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DialogTravelComponent} from '../dialog-travel/dialog-travel.component';
import {DialogEditTravelComponent} from '../dialog-edit-travel/dialog-edit-travel.component';

export interface Travel {
  id: number;
  date: string;
  departure: string;
  arrival: string;
}

@Component({
  selector: 'app-my-travels',
  templateUrl: './my-travels.component.html',
  styleUrls: ['./my-travels.component.scss']
})
export class MyTravelsComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private travelsService: TravelsService,
    private authService: AuthService) {
  }

  travels: Array<Travel>;

  ngOnInit(): void {
    this.fecthTravels();
  }
  goToAddTravelForm(): void {
    const dialogRef = this.dialog.open(DialogTravelComponent, {
    width: '350px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.fecthTravels();
    });
  }

  deleteTravel(id: number): void {
    this.travelsService.delete(id).then(() => this.fecthTravels());
  }

  editTravel(travel: Travel): void {
    const dialogRef = this.dialog.open(DialogEditTravelComponent, {
      width: '350px',
      data: travel
    });
    dialogRef.afterClosed().subscribe(result => {
      this.fecthTravels();
    });
  }

  fecthTravels(): void {
    this.travelsService.getAllUserTavels().subscribe((data: any[]) => {
      this.travels = data;
    });
  }
}
