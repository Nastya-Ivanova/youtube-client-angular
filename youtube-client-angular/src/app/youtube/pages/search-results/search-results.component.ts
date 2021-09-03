import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TSortKey, TSortOrder } from '../../types/filters.types';
import { ShowFiltersService } from '../../../core/services/show-filters.service';
import { HttpService } from '../../../core/services/http.service';
import { StoreService } from '../../../store/store.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  filterStr = '';
  sortKey: TSortKey = 'date';
  sortOrder: TSortOrder = 'desc';
  sortData: { [key in TSortKey]: TSortOrder } = {
    date: 'desc',
    views: 'desc',
  };

  constructor(
    private httpService: HttpService,
    public showFiltersService: ShowFiltersService,
    public storeService: StoreService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.storeService.searchStr$.subscribe((searchStr: string) => {
      if (searchStr.length > 0) {
        this.httpService.getSearchResult$(searchStr);
      }
    });
  }

  setFilterStr(str: string): void {
    this.filterStr = str;
  }

  setSortParams(key: TSortKey): void {
    this.sortKey = key;
    this.sortOrder = this.sortData[key] === 'desc' ? 'asc' : 'desc';
    this.sortData[key] = this.sortOrder;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
