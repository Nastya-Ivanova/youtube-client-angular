import { Pipe, PipeTransform } from '@angular/core';
import { TSortKey, TSortOrder } from '../pages/search-results/filters/filters.types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {IYoutubeResponseItem} from "../../core/services/http.service";

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  res!: Observable<IYoutubeResponseItem[]>;

  transform(
    sortArr: Observable<IYoutubeResponseItem[]>,
    sortOrder: TSortOrder,
    sortKey: TSortKey,
  ): Observable<IYoutubeResponseItem[]> {
    if (!sortArr || sortArr.pipe(map((items) => items.length <= 1))) {
      return sortArr;
    }

    if (sortKey === 'date') {
      this.res = sortArr.pipe(
        map((items) =>
          items.sort((a: IYoutubeResponseItem, b: IYoutubeResponseItem) => {
            const leftDate: Date = new Date(a.snippet.publishedAt);
            const rightDate: Date = new Date(b.snippet.publishedAt);

            if (leftDate > rightDate) {
              return 1;
            }
            if (leftDate < rightDate) {
              return -1;
            }
            return 0;
          }),
        ),
      );
    }

    // if (sortKey === 'views') {
    //   this.res = sortArr.pipe(
    //     map((items) =>
    //       items.sort(
    //         (a: IYoutubeResponseItem, b: IYoutubeResponseItem) => +a.statistics.viewCount - +b.statistics.viewCount,
    //       ),
    //     ),
    //   );
    // }

    return sortOrder === 'asc' ? this.res : this.res.pipe(map((items) => items.reverse()));
  }
}
