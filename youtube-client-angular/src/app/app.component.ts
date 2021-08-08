import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'youtube-client';
  isSearchResult:boolean = false;
  isFilters:boolean = false;

  setSearchResult(state:boolean):void{
    this.isSearchResult = state;
  }

  setFilters(state:boolean):void{
    this.isFilters = state;
  }
}
