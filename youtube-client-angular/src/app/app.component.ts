import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtube-client';
  isSearchResult = false;
  isFilters = false;

  setSearchResult(state:boolean):void{
    this.isSearchResult = state;
  }

  setFilters(state:boolean):void{
    this.isFilters = state;
  }
}
