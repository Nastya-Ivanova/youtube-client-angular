import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ISearchResult } from '../models/search-result.model';
import { ICustomCard } from '../../redux/state.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  str = '';

  transform(
    filterArr: Observable<(ICustomCard | ISearchResult)[]>,
    filterStr: string,
  ): Observable<(ICustomCard | ISearchResult)[]> {
    this.str = filterStr.trim().toLowerCase();
    if (!this.str) {
      return filterArr;
    }
    return filterArr.pipe(
      map((items) => items.filter((item) => item.title.toLowerCase().includes(this.str))),
    );
  }
}
