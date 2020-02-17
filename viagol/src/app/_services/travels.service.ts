import { Injectable } from '@angular/core';
import {Travel} from '../interfaces/travel';
import {ApiService} from './api.service';


@Injectable({
  providedIn: 'root'
})
export class TravelsService {
  constructor(private api: ApiService) {}

  getAllUserTavels() {
    return this.api.getAllUserTavels();
  }
  addTravel(travel: Travel): Promise<object> {
    return this.api.addTravel(travel);
  }
  editTravel(travel: Travel) {
    return this.api.editTravel(travel);
  }
  delete(id: number) {
    return this.api.deleteTravel(id);
  }
}
