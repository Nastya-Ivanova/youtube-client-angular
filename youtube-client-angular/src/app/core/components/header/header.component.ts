import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { ShowFiltersService } from '../../services/show-filters.service';
import { StoreService } from '../../../store/store.service';
import { State } from '../../../redux/state.model';
import { deleteYoutubeCardAction } from '../../../redux/actions/set-custom-card.action';

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
    private store: Store<State>,
  ) {}

  ngOnInit() {
    const search = this.search.pipe(
      filter((str) => str.length > 2),
      debounceTime(1000),
      distinctUntilChanged(),
      tap(() => this.storeService.setIsShowSearchResult(true)),
    );
    this.subscription = search.subscribe((searchStr) => {
      this.storeService.setSearchStr(searchStr);
      this.store.dispatch(deleteYoutubeCardAction());
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
