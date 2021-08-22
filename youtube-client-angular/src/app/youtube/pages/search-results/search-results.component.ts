import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { TSortKey, TSortOrder } from './filters/filters.types';
import { ShowFiltersService } from '../../services/show-filters.service';
import { HttpService, IYoutubeResponseItem } from '../../../core/services/http.service';
import { Observable, Subscription } from 'rxjs';
import { StoreService } from '../../../store/store.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent {
  @Input() isFilters = false;
  searchStr!: string;
  searchItems$!: Observable<IYoutubeResponseItem[]>;
  filterStr: string = '';
  sortKey: TSortKey = 'date';
  sortOrder: TSortOrder = 'desc';
  sortData: { [key in TSortKey]: TSortOrder } = {
    date: 'desc',
    views: 'desc',
  };
  subscription: Subscription;

  constructor(
    private cardsHttpService: HttpService,
    public showFiltersService: ShowFiltersService,
    public storeService: StoreService,
  ) {
    this.subscription = this.storeService.searchStr$.subscribe((str) => {
      this.searchItems$ = this.cardsHttpService.get();
      this.searchStr = str;
    });
  }

  filter(str: string): void {
    this.filterStr = str;
  }

  sort(key: TSortKey): void {
    this.sortKey = key;
    this.sortOrder = this.sortData[key] === 'desc' ? 'asc' : 'desc';
    this.sortData[key] = this.sortOrder;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
