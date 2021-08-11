import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../../auth/services/local-storage.service';
import { URL } from '../../types/url.types';

@Injectable({
  providedIn: 'root',
})
export class CanActivateLoginGuard implements CanActivate {
  constructor(private router: Router, private localStorageService: LocalStorageService) {}
  canActivate(): Observable<boolean> | boolean {
    if (!this.localStorageService.get()) {
      this.router.navigateByUrl(URL.login);
      return false;
    }
    return true;
  }
}
