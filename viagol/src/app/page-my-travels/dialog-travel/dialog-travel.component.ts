import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

class DialogData {
}

@Component({
  selector: 'app-dialog-travel',
  templateUrl: './dialog-travel.component.html',
  styleUrls: ['./dialog-travel.component.scss']
})
export class DialogTravelComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogTravelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    ngOnInit(): void {
    }

  closeDialog() {
    this.dialogRef.close();
  }

}
