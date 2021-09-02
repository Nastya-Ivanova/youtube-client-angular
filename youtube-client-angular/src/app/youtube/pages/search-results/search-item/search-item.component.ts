import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ISearchResult } from '../../../models/search-result.model';
import { ICustomCard } from '../../../../redux/state.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent {
  @Input() searchItem!: ICustomCard | ISearchResult;
}
