import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RouterUrl } from '../../../types/router-url.types';
import { LocalStorageService } from '../../../auth/services/local-storage.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginUserComponent {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    public authService: AuthService,
  ) {}

  logout() {
    this.localStorageService.clear();
    this.authService.setLogin('Your name');
    this.router.navigateByUrl(RouterUrl.login);
  }
}
