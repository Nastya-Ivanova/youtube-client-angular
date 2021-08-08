import {Component, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Output() isSearchStr = new EventEmitter<boolean>();
  @Output() isFilters = new EventEmitter<boolean>();

  searchStr:string = '';
  filters:boolean = false;

  setSearchStr(str:string):void{
    if(str.trim() && str !== this.searchStr){
      this.searchStr = str;
      this.isSearchStr.emit(true);
    }
  }

  setIsFilters():void{
    this.filters = !this.filters;
    this.isFilters.emit(this.filters);
  }
}
