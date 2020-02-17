import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TravelsService} from '../../_services/travels.service';
import {AuthService} from '../../_services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-travel',
  templateUrl: './form-travel.component.html',
  styleUrls: ['./form-travel.component.scss']
})
export class FormTravelComponent implements OnInit {
  constructor(
    private travelService: TravelsService,
    private authService: AuthService,
    private snackBar: MatSnackBar) {}
    @Output() sendedForm = new EventEmitter<void>();

  ngOnInit(): void {
  }

  onClickAdd(departure: string, arrival: string, date: string) {
    this.travelService.addTravel({departure, arrival, date, userId: this.authService.getCurrentUserId()}).then(() => {
      this.snackBar.open('Sucesso!', 'Fechar', {
        duration: 2000,
      });
      this.sendedForm.emit();
    });
  }

}
