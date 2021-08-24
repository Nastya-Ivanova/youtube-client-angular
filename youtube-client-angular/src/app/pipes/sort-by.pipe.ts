import { Pipe, PipeTransform } from '@angular/core';
import {ISearchItem} from "../search-results/search-item/search-item.model";
import {TSortKey, TSortOrder} from "../search-results/filters/filters.types";

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  res:ISearchItem[] = [];

  transform(sortArr:ISearchItem[], sortOrder:TSortOrder, sortKey:TSortKey):ISearchItem[] {
  if(!sortArr || sortArr.length <= 1){
    return sortArr;
  }

  if(sortKey === 'date'){
    this.res = sortArr.sort((a:ISearchItem, b:ISearchItem) => {
      const leftDate:Date = new Date(a.snippet.publishedAt);
      const rightDate:Date = new Date(b.snippet.publishedAt);
      return +leftDate - +rightDate;
    });
  }

  if(sortKey === 'views'){
    this.res = sortArr.sort((a:ISearchItem, b:ISearchItem) => +a.statistics.viewCount - +b.statistics.viewCount);
  }

  return sortOrder === 'asc' ? this.res : this.res.reverse();
  }
}
