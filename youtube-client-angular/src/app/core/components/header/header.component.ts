import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ShowFiltersService } from '../../../youtube/services/show-filters.service';
import { LocalStorageService } from '../../../auth/services/local-storage.service';
import { URL } from '../../../types/url.types';
import { of, Subscription } from 'rxjs';
import { debounceTime, filter, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { StoreService } from '../../../store/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  searchSubscription!: Subscription;
  searchInput: FormControl = new FormControl(null);

  constructor(
    public showFiltersService: ShowFiltersService,
    private localStorageService: LocalStorageService,
    private router: Router,
    public storeService: StoreService,
  ) {}

  logout() {
    this.localStorageService.clear();
    this.router.navigateByUrl(URL.login);
  }

  search(str: string) {
    this.searchSubscription = of(str)
      .pipe(
        debounceTime(1000),
        filter((str) => str.length > 2),
        tap((str) => this.storeService.setIsShowSearchResult(true)),
      )
      .subscribe((searchStr) => this.storeService.setSearchStr(searchStr));
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
}
