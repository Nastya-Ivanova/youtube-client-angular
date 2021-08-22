import { Pipe, PipeTransform } from '@angular/core';
//import { ISearchItem } from '../pages/search-results/search-item/search-item.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {IYoutubeResponseItem} from "../../core/services/http.service";

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  str: string = '';

  transform(filterArr: Observable<IYoutubeResponseItem[]>, filterStr: string): Observable<IYoutubeResponseItem[]> {
    this.str = filterStr.trim().toLowerCase();
    if (!this.str) {
      return filterArr;
    }
    return filterArr.pipe(
      map((items) =>
        items.filter(item => item.snippet.title.toLowerCase().includes(this.str)),
      ),
    );
  }
}
