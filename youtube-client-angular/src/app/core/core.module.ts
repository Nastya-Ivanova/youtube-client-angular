import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { HttpService } from './services/http.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [HeaderComponent, LoginUserComponent, NotFoundComponent],
    imports: [
        CommonModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
  exports: [HeaderComponent],
  providers: [HttpService, AuthService],
})
export class CoreModule {}
