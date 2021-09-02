import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { RouterUrl } from '../../../types/router-url.types';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private authService: AuthService,
  ) {}

  submit(myForm: NgForm) {
    if (myForm.valid) {
      this.localStorageService.setToken();
      this.authService.setLogin(myForm.value.name);
      this.router.navigateByUrl(RouterUrl.main);
    }
  }
}
