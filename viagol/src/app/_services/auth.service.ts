import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { User } from '../interfaces/user';


interface AuthUser {
  email: string;
  password: string;
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  execChange: Subject<any> = new Subject<any>();
  private HTTP_LOGIN_URL = 'https://localhost:5001/v1/login';
  constructor(private httpClient: HttpClient) {}
  async doLogin(authUser: AuthUser): Promise<User> {
    let user: User;
    return new Promise( (resolve, reject) => {
       this.httpClient.post(this.HTTP_LOGIN_URL, authUser).subscribe(data => {
        // @ts-ignore
        localStorage.setItem('currentUser', data.user);
        // @ts-ignore
        localStorage.setItem('userId', data.user.id);
        // @ts-ignore
        localStorage.setItem('userName', data.user.name);
        // @ts-ignore
        localStorage.setItem('userEmail', data.user.email);
        // @ts-ignore
        localStorage.setItem('accessToken', data.token);
         // @ts-ignore
        user = data.user;
        resolve(user);
      });
    });
  }
  isAuth() {
    return localStorage.getItem('accessToken') !== null;
  }
  getCurrentUserId() {
    return parseInt(localStorage.getItem('userId'), 10);
  }
  getCurrentUserName() {
    return localStorage.getItem('userName');
  }
  getCurrentUserEmail() {
    return localStorage.getItem('userEmail');
  }
  getToken() {
    return localStorage.getItem('accessToken');
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('accessToken');
  }
}
