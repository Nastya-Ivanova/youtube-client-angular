import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ISearchItem} from "./search-item/search-item.model";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent{
  searchItem:ISearchItem[] = [];
}
