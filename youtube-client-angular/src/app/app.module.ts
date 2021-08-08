import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchItemComponent } from './search-results/search-item/search-item.component';
import { LoginComponent } from './login/login.component';
import { FiltersComponent } from './search-results/filters/filters.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { GetDateFromStringPipe } from './pipes/get-date-from-string.pipe';
import { BorderBottomColorDirective } from './search-results/search-item/directives/border-bottom-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    LoginComponent,
    FiltersComponent,
    FilterPipe,
    SortByPipe,
    GetDateFromStringPipe,
    BorderBottomColorDirective,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
