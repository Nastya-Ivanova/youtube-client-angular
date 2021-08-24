import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setToken() {
    const token = Math.random().toString(16);
    localStorage.setItem('token', token);
  }

  getToken() {
    const token: string | null = localStorage.getItem('token');
    return Boolean(token);
  }

  clear() {
    localStorage.clear();
  }
}
