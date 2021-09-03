import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TSortKey, TSortOrder } from '../types/filters.types';
import { ISearchResult } from '../models/search-result.model';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  res!: Observable<ISearchResult[]>;

  transform(
    sortArr: Observable<ISearchResult[]>,
    sortOrder: TSortOrder,
    sortKey: TSortKey,
  ): Observable<ISearchResult[]> {
    if (!sortArr) {
      return sortArr;
    }

    if (sortKey === 'date') {
      this.res = sortArr.pipe(
        map((items: ISearchResult[]) =>
          items.sort((a: ISearchResult, b: ISearchResult) => {
            const leftDate: Date = new Date(a.publishedAt);
            const rightDate: Date = new Date(b.publishedAt);
            return +leftDate - +rightDate;
          }),
        ),
      );
    }

    if (sortKey === 'views') {
      this.res = sortArr.pipe(
        map((items) =>
          items.sort(
            (a: ISearchResult, b: ISearchResult) => +a.statistic.viewCount - +b.statistic.viewCount,
          ),
        ),
      );
    }

    return sortOrder === 'asc' ? this.res : this.res.pipe(map((items) => items.reverse()));
  }
}
