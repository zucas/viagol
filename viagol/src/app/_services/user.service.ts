import { Injectable } from '@angular/core';
import {User} from '../interfaces/user';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) { }

  createUser(user: User): Promise<object> {
    return this.api.createUser(user);
  }
  editUser(user: User): Promise<object> {
    return this.api.editUser(user);
  }
}
