import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { ISearchItem } from './search-item/search-item.model';
import { TSortKey, TSortOrder } from './filters/filters.types';
import { ShowSearchResultsService } from '../../services/show-search-results.service';
import { ShowFiltersService } from '../../services/show-filters.service';
import { CardsHttpService } from '../../../core/services/cards-http.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements OnInit {
  @Input() isFilters = false;

  searchItems: ISearchItem[] = [];
  filterStr: string = '';
  sortKey: TSortKey = 'date';
  sortOrder: TSortOrder = 'desc';
  sortData: { [key in TSortKey]: TSortOrder } = {
    date: 'desc',
    views: 'desc',
  };

  constructor(
    private cardsHttpService: CardsHttpService,
    public showSearchResults: ShowSearchResultsService,
    public showFiltersService: ShowFiltersService,
  ) {}

  ngOnInit(): void {
    this.cardsHttpService.get().subscribe((cards) => {
      this.searchItems = cards;
      return this.searchItems;
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
}
