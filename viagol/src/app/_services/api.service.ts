import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Travel} from '../interfaces/travel';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private authService: AuthService) {

  }
  private HTTP_GET_URL = 'https://localhost:5001/v1/travels/users/';
  private HTTP_TRAVELS_URL = 'https://localhost:5001/v1/travels';
  private HTTP_USERS_URL = 'https://localhost:5001/v1/users';
  getAllUserTavels() {
    return this.http.get(`${this.HTTP_GET_URL}${this.authService.getCurrentUserId()}`);
  }
  addTravel(travel: Travel): Promise<object> {
    return new Promise((resolve) => {
      this.http.post(this.HTTP_TRAVELS_URL, travel).subscribe(data => {
        resolve(data);
      });
    });
  }
  editTravel(travel: Travel) {
    return new Promise((resolve) => {
      this.http.put(`${this.HTTP_TRAVELS_URL}/${travel.id}`, travel).subscribe(data => {
        resolve();
      });
    });
  }
  deleteTravel(id: number): Promise<void>  {
    return new Promise((resolve) => {
      this.http.delete(`${this.HTTP_TRAVELS_URL}/${id}`).subscribe(data => {
        resolve();
      });
    });
  }

  createUser(user: User): Promise<object> {
    return new Promise((resolve) => {
      this.http.post(this.HTTP_USERS_URL, user).subscribe(data => {
        resolve(data);
      });
    });
  }

  editUser(user: User): Promise<object> {
    return new Promise((resolve) => {
      this.http.put(`${this.HTTP_USERS_URL}/${user.id}`, user).subscribe(data => {
        resolve(data);
      });
    });
  }
}
