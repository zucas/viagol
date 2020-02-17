import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface Travel {
  id: number;
  date: string;
  departure: string;
  arrival: string;
}


@Component({
  selector: 'app-my-travels-table',
  templateUrl: './my-travels-table.component.html',
  styleUrls: ['./my-travels-table.component.scss']
})
export class MyTravelsTableComponent {
  displayedColumns: string[] = ['date', 'departure', 'arrival', 'actions'];
  @Input() travels: Array<Travel>;

  @Output() clickedBtnDelete = new EventEmitter<number>();
  @Output() clickedBtnEdit = new EventEmitter<Travel>();

  clickBtnEdit(travel: Travel) {
    this.clickedBtnEdit.emit(travel);
  }
  clickBtnDelete(id: number) {
    this.clickedBtnDelete.emit(id);
  }

}

