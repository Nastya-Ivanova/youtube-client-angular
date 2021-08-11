import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { URL } from '../../types/url.types';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private router: Router) {}

  setToken() {
    const token = Math.random().toString(16);
    localStorage.setItem('token', token);
    this.router.navigateByUrl(URL.main);
  }

  getToken() {
    const token: string | null = localStorage.getItem('token');
    return Boolean(token);
  }

  clear() {
    localStorage.clear();
  }
}
