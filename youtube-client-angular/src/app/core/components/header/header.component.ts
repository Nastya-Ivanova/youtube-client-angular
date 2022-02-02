import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ShowSearchResultsService } from '../../../youtube/services/show-search-results.service';
import { ShowFiltersService } from '../../../youtube/services/show-filters.service';
import { LocalStorageService } from '../../../auth/services/local-storage.service';
import { URL } from '../../../types/url.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(
    public showSearchResults: ShowSearchResultsService,
    public showFiltersService: ShowFiltersService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {}

  logout() {
    this.localStorageService.clear();
    this.router.navigateByUrl(URL.login);
  }
}
