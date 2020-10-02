import { Injectable } from '@angular/core';
import { API } from './api';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private api: API //inject API class
  ) { }

  login(username: string, password: string) {
    return this.api.post('/api/Account/login', {
      "username": username,
      "password": password
    });
  }

  setToken(token) {
    return localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token') ? localStorage.getItem('token') : sessionStorage.getItem('token');
  }
}
