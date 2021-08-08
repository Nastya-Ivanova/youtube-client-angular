import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import responseData from './response.json';
import {ISearchItem} from "./search-item/search-item.model";
import {TSortKey, TSortOrder} from "./filters/filters.types";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent{
  @Input() isSearchResult = false;
  @Input() isFilters = false;

  searchItems:ISearchItem[] = responseData.items;
  filterStr:string = '';
  sortKey:TSortKey = 'date';
  sortOrder:TSortOrder = 'desc';
  sortData:{[key in TSortKey]:TSortOrder} = {
    'date': 'desc',
    'views': 'desc',
  }

  filter(str:string):void{
    this.filterStr = str;
  }

  sort(key:TSortKey):void{
    this.sortKey = key;
    this.sortOrder = this.sortData[key] === 'desc' ? 'asc' : 'desc';
    this.sortData[key] = this.sortOrder;
  }
}
