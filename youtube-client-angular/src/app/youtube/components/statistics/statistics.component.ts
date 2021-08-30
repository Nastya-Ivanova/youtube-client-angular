import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ISearchResult } from '../../models/search-result.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsComponent {
  // @Input() searchItem!: ISearchResult;
  @Input() searchItem!: ISearchResult | any;
}
