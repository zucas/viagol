import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Travel} from '../../interfaces/travel';

class DialogData {
  travel: Travel;
}

@Component({
  selector: 'app-dialog-edit-travel',
  templateUrl: './dialog-edit-travel.component.html',
  styleUrls: ['./dialog-edit-travel.component.scss']
})
export class DialogEditTravelComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogEditTravelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
