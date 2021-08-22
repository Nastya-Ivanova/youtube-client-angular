import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import {HttpService} from "./services/http.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [HeaderComponent, LoginUserComponent, NotFoundComponent],
    imports: [CommonModule, MatIconModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent],
  providers: [HttpService]
})
export class CoreModule {}
