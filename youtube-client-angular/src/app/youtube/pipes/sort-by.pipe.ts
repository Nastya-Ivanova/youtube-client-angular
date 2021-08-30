import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TSortKey, TSortOrder } from '../types/filters.types';
import { ISearchResult } from '../models/search-result.model';
import { ICustomCard } from '../../redux/state.model';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  res!: Observable<(ICustomCard | ISearchResult)[]>;

  transform(
    sortArr: Observable<(ICustomCard | ISearchResult)[]>,
    sortOrder: TSortOrder,
    sortKey: TSortKey,
  ): Observable<(ICustomCard | ISearchResult)[]> {
    if (!sortArr) {
      return sortArr;
    }

    if (sortKey === 'date') {
      this.res = sortArr.pipe(
        map((items: (ICustomCard | ISearchResult)[]) =>
          items.sort((a: ICustomCard | ISearchResult, b: ICustomCard | ISearchResult) => {
            const leftDate: Date = new Date(a.publishedAt);
            const rightDate: Date = new Date(b.publishedAt);
            return +leftDate - +rightDate;
          }),
        ),
      );
    }

    if (sortKey === 'views') {
      this.res = sortArr.pipe(
        map((items) => {
          const arrWithStatistic = items.filter((item) =>
            Object.prototype.hasOwnProperty.call(item, 'statistic'),
          ) as ISearchResult[];
          return arrWithStatistic.sort((a, b) => +a.statistic.viewCount - +b.statistic.viewCount);
        }),
      );
    }

    return sortOrder === 'asc' ? this.res : this.res.pipe(map((items) => items.reverse()));
  }
}
