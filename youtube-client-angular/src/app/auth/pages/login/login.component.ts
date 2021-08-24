import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";
import { LocalStorageService } from '../../services/local-storage.service';
import { URL } from '../../../types/url.types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private localStorageService: LocalStorageService, private router: Router) {}

  submit(myForm: NgForm) {
    if (myForm.valid) {
      this.localStorageService.setToken();
      this.router.navigateByUrl(URL.main);
    }
  }
}
