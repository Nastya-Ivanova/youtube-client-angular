import { Pipe, PipeTransform } from '@angular/core';
import {ISearchItem} from "../search-results/search-item/search-item.model";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  str = '';

  transform(filterArr:ISearchItem[], filterStr:string):ISearchItem[] {
    this.str = filterStr.trim().toLowerCase();
    if(!this.str){
      return filterArr;
    }
    return filterArr.filter(item => item.snippet.title.toLowerCase().includes(this.str));
  }
}
