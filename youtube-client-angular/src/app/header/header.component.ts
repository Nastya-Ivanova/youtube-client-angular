import {Component, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Output() searchChanged = new EventEmitter<boolean>();
  @Output() filtersChanged = new EventEmitter<boolean>();

  searchStr = '';
  filters = false;

  setSearchStr(str:string):void{
    if(str.trim() && str !== this.searchStr){
      this.searchStr = str;
      this.searchChanged.emit(true);
    }
  }

  setIsFilters():void{
    this.filters = !this.filters;
    this.filtersChanged.emit(this.filters);
  }
}
