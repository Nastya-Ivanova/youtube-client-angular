import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import {CardsHttpService} from "./services/cards-http.service";

@NgModule({
  declarations: [HeaderComponent, LoginUserComponent, NotFoundComponent],
  imports: [CommonModule, MatIconModule],
  exports: [HeaderComponent],
  providers: [CardsHttpService]
})
export class CoreModule {}
