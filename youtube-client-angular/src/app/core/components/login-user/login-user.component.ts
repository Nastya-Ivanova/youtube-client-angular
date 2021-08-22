import { Component, ChangeDetectionStrategy } from '@angular/core';
import {LocalStorageService} from "../../../auth/services/local-storage.service";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginUserComponent {
  constructor(public localStorageService: LocalStorageService) {
  }
}
