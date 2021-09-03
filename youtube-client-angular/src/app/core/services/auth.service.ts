import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  private login = new BehaviorSubject('Your name');
  login$ = this.login.asObservable();

  setLogin(login: string) {
    this.login.next(login);
  }
}
