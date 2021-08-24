import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { ShowFiltersService } from '../../services/show-filters.service';
import { StoreService } from '../../../store/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  search = new Subject<string>();

  constructor(
    public showFiltersService: ShowFiltersService,
    public storeService: StoreService,
  ) {}

  ngOnInit() {
    const search = this.search.pipe(
      filter((str) => str.length > 2),
      debounceTime(1000),
      distinctUntilChanged(),
      tap(() => this.storeService.setIsShowSearchResult(true)),
    );
    this.subscription = search.subscribe((searchStr) => this.storeService.setSearchStr(searchStr));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
