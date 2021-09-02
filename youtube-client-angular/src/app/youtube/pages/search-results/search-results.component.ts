import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { pairwise } from 'rxjs/operators';
import { TSortKey, TSortOrder } from '../../types/filters.types';
import { ShowFiltersService } from '../../../core/services/show-filters.service';
import { HttpService } from '../../../core/services/http.service';
import { StoreService } from '../../../store/store.service';
import { ICustomCard, State } from '../../../redux/state.model';
import { getAllCards } from '../../../redux/selectors/custom-cards.selectors';
import { ISearchResult } from '../../models/search-result.model';

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

  searchResult$!: Observable<(ICustomCard | ISearchResult)[]>;

  constructor(
    private httpService: HttpService,
    public showFiltersService: ShowFiltersService,
    public storeService: StoreService,
    private store: Store<State>,
  ) {}

  ngOnInit(): void {
    this.subscription = this.storeService.searchStr$
      .pipe(pairwise())
      .subscribe(([previous, current]) => {
        if (previous !== current) {
          this.httpService.getSearchResult$(current);
        }
      });

    this.searchResult$ = this.store.select(getAllCards);
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
