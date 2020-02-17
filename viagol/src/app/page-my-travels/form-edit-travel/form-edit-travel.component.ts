import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../../_services/auth.service';
import {TravelsService} from '../../_services/travels.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Travel} from '../../interfaces/travel';

@Component({
  selector: 'app-form-edit-travel',
  templateUrl: './form-edit-travel.component.html',
  styleUrls: ['./form-edit-travel.component.scss']
})
export class FormEditTravelComponent implements OnInit {

  constructor(
    private travelService: TravelsService,
    private authService: AuthService,
    private snackBar: MatSnackBar) {}
  @Output() sendedForm = new EventEmitter<void>();
  @Input() travel: Travel;

  ngOnInit(): void {
  }
  onClickEdit() {
    this.travelService.editTravel(this.travel).then(() => {
      this.snackBar.open('Sucesso!', 'Fechar', {
        duration: 2000,
      });
      this.sendedForm.emit();
    });
  }

}
