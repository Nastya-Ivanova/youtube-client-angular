import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private localStorageService: LocalStorageService) {}

  submit(myForm: NgForm) {
    if (myForm.valid) {this.localStorageService.set(myForm.value.name);
    }
  }
}
