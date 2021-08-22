import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { URL } from '../../types/url.types';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  login!:string;

  constructor(private router: Router) {}

  set(login:string) {
    this.login = login;
    const token = Math.random().toString(16);
    localStorage.setItem('token', token);
    this.router.navigateByUrl(URL.main);
  }

  get() {
    const token: string | null = localStorage.getItem('token');
    return Boolean(token);
  }

  getLogin(){
    return this.login;
  }

  clear() {
    localStorage.clear();
  }
}
