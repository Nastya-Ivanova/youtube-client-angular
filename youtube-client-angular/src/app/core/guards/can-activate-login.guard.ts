import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../../auth/services/local-storage.service';
import { RouterUrl } from '../../types/router-url.types';

@Injectable({
  providedIn: 'root',
})
export class CanActivateLoginGuard implements CanActivate {
  constructor(private router: Router, private localStorageService: LocalStorageService) {}
  canActivate(): Observable<boolean> | boolean {
    if (!this.localStorageService.getToken()) {
      this.router.navigateByUrl(RouterUrl.login);

      return false;
    }
    return true;
  }
}
