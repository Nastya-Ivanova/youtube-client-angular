import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../../auth/services/local-storage.service';
import { URL } from '../../types/url.types';

@Injectable({
  providedIn: 'root',
})
export class CanLoadLoginGuard implements CanLoad {
  constructor(private router: Router, private localStorageService: LocalStorageService) {}
  canLoad(): Observable<boolean> | boolean {
    if (!this.localStorageService.getToken()) {
      this.router.navigateByUrl(URL.login);
      return false;
    }
    return true;
  }
}
